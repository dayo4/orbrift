
import AOS from "aos"
import { $General } from '@/addons'
// import moment from 'moment'

export default defineNuxtPlugin((nuxtApp) => {
function initAOS(){
  return AOS.init({
  // Global settings:
  initClassName: 'smh-init', // class applied after initialization
  animatedClassName: 'smh-animate', // class applied on animation  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  duration: 600,
  once: true,
  offset: 150, // offset (in px) from the original trigger point
  anchorPlacement: 'top-top', // defines which position of the element regarding to window should trigger the animation
});
}

  return {
    provide: {
      appLogo: $General.appLogo,
      myMetaInfo: $General.metaInfo,
      aos:initAOS
      // moment
    }
  }
})
