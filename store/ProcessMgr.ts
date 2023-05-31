interface LoadingProcessNotification {
    status: boolean
    info: string
    icon: string
    progressTotal: number
    progressElapsed: number
}

import { defineStore } from "pinia"

export const useProcess = defineStore('process-mgr', {
    state: (): LoadingProcessNotification => ({
        status: false,
        info: '',
        icon: "icon-info",
        progressTotal: 0,
        progressElapsed: 0,
    }),
    actions: {
        hide(): void {
            this.status = false
            this.progressTotal = 0
            this.progressElapsed = 0
        },
        add(text?: string):void {
            this.info = text ? text : 'Processing...'
            this.icon = 'icon-info'
            if (this.status === false)
                this.status = true
        },
        progress(text?: string):void {
            this.info = text ? text : 'Processing...'
            this.icon = 'icon-info'
            if (this.status === false)
                this.status = true
        },
        resolve(): void {
            this.icon = 'icon-reply'
            setTimeout(() => {
                this.hide()
            }, 2000)
        },
    }
})
