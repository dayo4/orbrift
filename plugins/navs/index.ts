
import { TopNav } from './modules/TopNav'
import { BottomNav } from './modules/BottomNav'
import { Container } from './modules/Container'


export class Navs {
    $top = ref(new TopNav()).value
    $bottom = ref(new BottomNav()).value
    $container = ref(new Container()).value
}

export default defineNuxtPlugin((nuxtApp) => {
    const $Navs = ref(new Navs())

    return {
        provide: {
            Navs: $Navs.value
        }
    }
})