import { $Navs } from '@/mystore'

export class Container {
    element: Window | null = null  /* This will be used to point to the MainContainer component from other components */
    scrolled: boolean = false

    ScrollingHandler() {
        let topNav = $Navs.$top.element
        console.log(topNav)

        let scrollPos = this.element?.pageYOffset

        let _this = this
        this.element?.addEventListener('scroll', function (e) {
            if (e.isTrusted) {
                var subsequentScrollPos = _this.element?.pageYOffset

                if (scrollPos && subsequentScrollPos) {
                    /* For monitoring the container scrolled status */
                    if (subsequentScrollPos > 200) {
                        _this.scrolled = true
                    } else {
                        _this.scrolled = false
                    }

                    /* For hiding the TopNav when scrolling downward*/
                    if (subsequentScrollPos > 200) {
                        scrollPos > subsequentScrollPos
                            ? topNav.classList.remove('rotated')
                            : topNav.classList.add('rotated')
                        scrollPos = subsequentScrollPos
                    }
                }

            }
        }, false)

    }
}
