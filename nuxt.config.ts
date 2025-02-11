// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2024-11-01',
   future: {
      compatibilityVersion: 4,
    },
   devtools: { enabled: false },
   experimental: {
      scanPageMeta: 'after-resolve',
      sharedPrerenderData: false,
      compileTemplate: true,
      resetAsyncDataToUndefined: true,
      templateUtils: true,
      relativeWatchPaths: true,
      normalizeComponentNames: false,
      spaLoadingTemplateLocation: 'within',
      defaults: {
        useAsyncData: {
          deep: true
        }
      }
    },
    features: {
      inlineStyles: true
    },
    unhead: {
      renderSSRHeadOptions: {
        omitLineBreaks: false
      }
    },
   modules: [
   // '@nuxtjs/supabase',
      '@nuxt/image',
      'nuxt-lodash',
      '@pinia/nuxt',
      'pinia-plugin-persistedstate/nuxt',
      '@nuxtjs/fontaine',
      '@nuxtjs/i18n',
      '@nuxtjs/color-mode',
      '@nuxt/icon',
      '@nuxtjs/html-validator'
   ],

      i18n: {
         lazy: true,
         strategy: 'prefix_except_default',
         locales: [
            {
               code: 'ru',
               name: 'RU',
               file: 'ru-RU.json'
            },
            {
               code: 'be',
               name: 'BY',
               file: 'be-BY.json'
             }
         ],
         defaultLocale: 'ru'
   },

   image: {
      screens: {
         'xs': 320,
         'sm': 479.98,
         'md': 767.98,
         'lg': 1023.98,
         'xl': 1279.98,
         'xxl': 1536,
         '2xl': 1536
      },
      quality: 85,
      densities: [1, 2],
      format: ['avif', 'webp'],
   },

   icon: {
      customCollections: [
        {
          prefix: 'my-icon',
            dir: './public/my-icons',
            normalizeIconName: false,
        },
      ],
    },

   colorMode: {
      preference: 'system', // default value of $colorMode.preference
      fallback: 'light', // fallback value if not system preference found
    },
   css: ['~/assets/scss/styles.scss'],
   vite: {
      css: {
         preprocessorOptions: {
           scss: {
               additionalData: `
             @use "@/assets/scss/base/_container.scss" as *;
             @use "@/assets/scss/base/_fonts.scss" as *;
             @use "@/assets/scss/base/_functions.scss" as *;
             @use "@/assets/scss/base/_globals.scss" as *;
             @use "@/assets/scss/base/_mixins.scss" as *;
             @use "@/assets/scss/base/_normalize.scss" as *;
             `,
            }
         },
         preprocessorMaxWorkers: true,
         devSourcemap: true,
       },
      build: {
         cssCodeSplit: true,
         cssMinify: true
       },
       optimizeDeps: {
         include: ['sass']
      },
      assetsInclude: ['**/*.avif']
   },

   runtimeConfig: {
      public: {
        stripePk: process.env.STRIPE_PK_KEY
      }
   },

   app: {
      head: {
         title: 'TechnoMars',
         htmlAttrs: {
            lang: 'ru'
          },
      //    script: [
      //     { src: 'https://js.stripe.com/v3/', defer: true }
      //   ]
      }
   }
})