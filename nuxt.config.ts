// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Orbrift',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
        },
    },
    ssr: false,
    
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @import "~/globalStyles/devOnly/_variables.scss";
                    @import "~/globalStyles/devOnly/_mixins.scss";
                    @import "~/globalStyles/devOnly/theme/main.scss";
                    `,
                },
            },
        },
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/globalStyles/deploy/myCssLibrary/greycore.css",
        "~/globalStyles/deploy/icons/css/fontello.css",
        '~/globalStyles/deploy/general.scss',
        '~/globalStyles/deploy/logo.scss',
        '~/globalStyles/deploy/plugins.scss',
        '~/globalStyles/deploy/transitions.css',

        '~/globalStyles/deploy/theme/main.scss',

        /* Obstacl styles */
        '~/node_modules/obstacl/dist/obstacl.min.css'
    ],
    // static: {
    //   prefix: false
    // },
    // styleResources: {
    //     scss: [
    //         '~/globalStyles/devOnly/_variables.scss',
    //         '~/globalStyles/devOnly/_mixins.scss',
    //         '~/globalStyles/devOnly/theme/main.scss',
    //     ]
    // },
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/navs/index.ts'
    ],
    // target: 'static',
    // Auto import components: https://go.nuxtjs.dev/config-components
    // components: true,
    components: [
        {
            path: '~/components',
            pathPrefix: false
        },
        {
            path: '~/components/GlobalComponents',
            pathPrefix: false
        },
        {
            path: '~/components/GlobalComponents/utils',
            pathPrefix: false
        },
        // {
        //     path: '~/components/navs/',
        //     pathPrefix: false
        // },
    ]
    ,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    // buildModules: [
    //     // https://go.nuxtjs.dev/typescript
    //     '@nuxt/typescript-build',
    //     '@nuxtjs/style-resources',
    // ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        // '@nuxtjs/axios',
        // ['@pinia/nuxt', {
        //     autoImports: [
        //         // automatically imports `defineStore`
        //         'defineStore',
        //     ]
        // }
        // ]
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    // axios: {
    //     // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    //     baseURL: '/',
    // },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },
    // loading: '~/components/GlobalComponents/notification/Loading.vue',
    // productionSourceMap: false,
    // server: {
    //     port: 3050
    // }

})
