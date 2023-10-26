// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Orbrift",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
    },
    pageTransition: {
      name: 'main-layout', mode: 'out-in'
    },
    // layoutTransition: {
    //   name: 'slide-fade', mode: 'in-out'
    // }
  },
  ssr: true,

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                    @import "~/assets/styles/devOnly/_variables.scss";
                    @import "~/assets/styles/devOnly/_mixins.scss";
                    @import "~/assets/styles/devOnly/theme/main.scss";
                    `,
        },
      },
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/deploy/myCssLibrary/greycore.css",
    "~/assets/styles/deploy/icons/css/fontello.css",
    "~/assets/styles/deploy/general.scss",
    "~/assets/styles/deploy/logo.scss",
    "~/assets/styles/deploy/transitions.css",

    "~/assets/styles/deploy/theme/main.scss",
    "~/assets/styles/main.css",
    "aos/dist/aos.css",
  ],
  runtimeConfig: {
    public: {
      contentfulSpaceId: process.env.NUXT_PUBLIC_CONTENTFUL_SPACE_ID,
      contentfulDeliveryKey: process.env.NUXT_PUBLIC_CONTENTFUL_DELIVERY_KEY,
      contentfulPreviewKey: process.env.NUXT_PUBLIC_CONTENTFUL_PREVIEW_KEY,
    },
  },
  plugins: [
    // "~/plugins/navs/index.ts"
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      //   routes: ['/user/1', '/user/2'],
      // ignore: ['/dynamic']
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // modules: [
  // https://go.nuxtjs.dev/axios
  // '@nuxtjs/axios',
  // ['@pinia/nuxt', {
  //     autoImports: [
  //         // automatically imports `defineStore`
  //         'defineStore',
  //     ]
  // }
  // ]
  // ],
  // modules: ["@nuxtjs/apollo"],
  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.NUXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
  //       httpLinkOptions: {
  //         headers: {
  //           authorization: `Bearer ${process.env.NUXT_PUBLIC_CONTENTFUL_DELIVERY_KEY}`,
  //         },
  //       }
  //     },
  //     preview: {
  //       httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.NUXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
  //       httpLinkOptions: {
  //         headers: {
  //           authorization: `Bearer ${process.env.NUXT_PUBLIC_CONTENTFUL_PREVIEW_KEY}`,
  //         },
  //       },
  //     },
  //   },
  // },
  // loading: '~/components/GlobalComponents/notification/Loading.vue',
});
