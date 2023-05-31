// import ResponseHandler from './ResponseHandler'
import {
    isDef,
    isEmptyObj,
    isNum,
    isObj,
    isString,
    hasProp,
    logError
} from '../utils/index'


interface schemaDataInterface {
    fieldName: string // name of the field being validated. Required as reference to the field.
    data: any//this is the data to be valivated.
    rules: {
        [ index: string ]: any //boolean | number | string
    }
    messages?: {//custom validation messages if provided
        [ index: string ]: string
    }
}

interface schemaOptions {//possible options to pass to the validate() method as second parameter
    skip?: any //Will skip the validation of any fieldName in the array. (Useful when using same schema for multiple validations)
}

interface ruleOptions {
    fieldName: string
    ruleValue?: string | number | null // for rules that require a validation value. Example->  rules: { min: 20 } //'20' here is the ruleValue,
}

interface errorOptions {
    format?: string
    // ruleValue?: string
}

export default class HGValidator {
    private readonly defaultRules: string[] = [ 'required', 'type', 'string', 'number', 'email', 'min', 'max', 'equalTo', 'pattern' ]

    private errors: object = {}


    validate (schema: schemaDataInterface[], options?: schemaOptions): boolean | object {
        if (!Array.isArray(schema))
        {
            logError('The validation schema is expected to be an array of objects.')
        }
        else
        {

            if (options)
            {
                schema = schema.filter((x) => {
                    const skip = options.skip
                    if (skip)
                    {
                        if (!Array.isArray(skip))
                        {
                            logError('Skip option expects an array of strings')
                        } else if (!(hasProp(skip, x.fieldName)))
                        {
                            return x
                        }
                        console.log('skipped ' + x.fieldName)
                        return
                    }
                    return x
                })
            }

            this.errors = {}
            let validation_count = 0

            for (const x of schema)
            {
                if (!isDef(x.rules) || !isDef(x.fieldName) || !isObj(x))
                {
                    logError(`Validation Schema is invalid or missing required entries.`)
                }

                const fieldName = x.fieldName
                const data = x.data
                const rules = x.rules
                const messages = x.messages

                for (const y of Object.keys(rules))
                {
                    if (!(hasProp(this.defaultRules, y)))
                    {
                        logError(`Unknown rule type  "${y}"  detected in schema with field name "${fieldName}".`)
                    }
                    else if (!isDef(rules[ y ]))
                    {
                        logError(`Invalid value assigned to rule "${y}" in schema with field name "${fieldName}" .`)
                    }
                    else
                    {
                        const response = this[ y ](
                            data,
                            {
                                fieldName,
                                ruleValue: rules[ y ]
                            })
                        validation_count++
                        if (response !== true)
                        {
                            //@ts-ignore
                            Object.assign(this.errors, {
                                [ fieldName ]: messages && messages[ y ] ? messages[ y ] : response
                            })

                            break
                        }
                    }
                }

            }
            if (isEmptyObj(this.errors) && validation_count > 0)
            {
                return true
            }
            return false
        }
    }

    sanitize (data: string, option?: { strict: boolean }) {
        if (!isString(data))
        {
            logError(`Data to sanitize is expected to be a string. Got "${typeof data}" instead.`)
        }
        else
        {
            if (option && option.strict === false)
            {
                return data.replace(/(<([script^>]+)>)/ig, "").trim()
            }
            return data.replace(/(<([^>]+)>)/ig, "").replace(/\s{2,}/g, ' ').trim()
        }
    }

    getErrors (options?: { format: string }) {
        if (options && options.format == 'single')
        {
            return this.errors[ Object.keys(this.errors)[ 0 ] ]
        }
        return this.errors
    }

    protected required (data: any, options: ruleOptions) {
        if (isDef(data) && data !== '')
        {
            return true
        }
        return `${options.fieldName} is required.`
    }
    protected string (data: any, options: ruleOptions) {
        if (isString(data))
        {
            return true
        }
        return `${options.fieldName} is expected to be a string.`
    }
    protected number (data: any, options: ruleOptions) {
        if (isNum(data))
        {
            return true
        }
        return `${options.fieldName} is expected to be a number or integer.`
    }
    protected email (data: any, options: ruleOptions) {
        if (data.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))
        {
            return true
        }
        return `${options.fieldName} must be a valid email address.`
    }
    protected min (data: any, options: ruleOptions) {
        if (!isNum(options.ruleValue))
        {
            logError(`The value of "MIN" rule in FIELD '${options.fieldName}' is expected to be a number.`)
        }
        if (isString(data) && data.length < options.ruleValue)
        {
            return `${options.fieldName} should be a minimum of ${options.ruleValue} characters.`
        }
        else if (isNum(data) && data < options.ruleValue)
        {
            return `${options.fieldName} value should not be less than ${options.ruleValue}.`
        }
        return true
    }
    protected max (data: any, options: ruleOptions) {
        if (!isNum(options.ruleValue))
        {
            logError(`The value of "MAX" rule in FIELD '${options.fieldName}' is expected to be a number.`)
        }
        if (isString(data) && data.length > options.ruleValue)
        {
            return `${options.fieldName} should be a maximum of ${options.ruleValue} characters.`
        }
        else if (isNum(data) && data > options.ruleValue)
        {
            return `${options.fieldName} value should not be greater than ${options.ruleValue}.`
        }
        return true
    }
    protected equalTo (data: any, options: ruleOptions) {
        if (data === options.ruleValue)
        {
            return true
        }
        return `${options.fieldName} should be equall to ${options.ruleValue}.`
    }
    protected pattern (data: any, options: ruleOptions) {
        const regExp: RegExp = options.ruleValue as any
        if (regExp.test(data))
        {
            return true
        }
        return `${options.fieldName} must match this pattern ${options.ruleValue}.`
    }
}
