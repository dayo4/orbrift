import { $General } from '@/addons'
import moment from 'moment'

export default defineNuxtPlugin((nuxtApp) => {

  return {
    provide: {
      appLogo: $General.appLogo,
      myMetaInfo: $General.metaInfo,
      moment
    }
  }
})
