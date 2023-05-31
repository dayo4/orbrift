import { defineStore } from "pinia"
import { useProcess } from '@/store'

import { $baseApi } from "~/addons/utils/Axios"

export const useMailer = defineStore('mailer', {
    state: () => ({
        success: '',
        error: ''
    }),
    actions: {
        async sendMail(payload) {
            const $Process = useProcess()
            $Process.add('Sending Message...')
            this.success = this.error = ''
            try {

                const data = await $baseApi.post("sendMail", {
                    ...payload
                })
                $Process.add('Successful!')
                this.success = data
                return data
            }
            catch ({ response }) {
                $Process.add('Request Failed!')
                this.error = response.data.message
            }
            finally {
                $Process.resolve()
            }
        },

        async sendProjectEnq(payload) {
            const $Process = useProcess()
            $Process.add('Sending Message...')
            this.success = this.error = ''
            try {
                const data = await $baseApi.post("sendProjectEnq", {
                    ...payload
                })
                this.success = data
                $Process.add('Successful!')
                return data
            }
            catch ({ response }) {
                this.error = response.data.message
                $Process.add('Request Failed!')
            }
            finally {
                $Process.resolve()
            }
        },
        setError(value) {
            this.error = value
        },
        setSuccess(value) {
            this.success = value
        },
    }
})