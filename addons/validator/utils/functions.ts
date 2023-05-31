
export function isDef(i: any) {
    return i !== undefined && i !== null
}

export function isString(i: any) {
    return isDef(i) && typeof i === 'string'
}

export function isNum(i: any) {
    return isDef(i) && typeof i === 'number'
}

export function isObj(obj: any) {
    return obj !== null && typeof obj === 'object'
}

export function isEmptyObj(obj: any) {
    return isObj(obj) && Object.keys(obj).length <= 0
}

export function hasProp(arr: any[], item: any) {
    return arr.some((x) => x === item)
}
