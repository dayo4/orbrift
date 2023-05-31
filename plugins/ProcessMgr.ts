interface LoadingProcessNotification {
    status: boolean
    info: string
    icon: string
    progressTotal:number
    progressElapsed:number
    hide():void
    resolve():void
    add(text?:string):void
    progress(text?:string):void
}

class LoadingProcessNotification implements LoadingProcessNotification {
    status = false
    info = ''
    icon = "icon-info"
    progressTotal = 0
    progressElapsed = 0

    hide() {
        this.status = false
        this.progressTotal = 0
        this.progressElapsed = 0
    }

    resolve() {
        this.icon = 'icon-reply'
        setTimeout(() => {
            this.hide()
        }, 2000)
    }

    add(text?: string) {
        this.info = text ? text : 'Processing...'
        this.icon = 'icon-info'
        if (this.status === false)
            this.status = true
    }

    progress(text?: string) {
        this.info = text ? text : 'Processing...'
        this.icon = 'icon-info'
        if (this.status === false)
            this.status = true
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    const Process = new LoadingProcessNotification()

    return {
        provide: {
            Process
        }
    }
})