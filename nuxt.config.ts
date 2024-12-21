// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
   devtools: { enabled: false },
   // ssr: true,
   modules: [
   // '@nuxtjs/supabase',
      '@nuxt/image',
      '@vesp/nuxt-fontawesome',
      'nuxt-lodash', '@pinia/nuxt',
      'pinia-plugin-persistedstate/nuxt',
      '@nuxtjs/fontaine', '@nuxtjs/i18n',
      '@nuxtjs/color-mode'],

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
      inject: true,
      quality: 85,
      format: ['avif','webp'],
      screens: {
         'xs': 320,
         'sm': 480,
         'md': 768,
         'lg': 992,
         'xl': 1024,
         'xxl': 1280,
         '2xl': 1550
      },
      densities: [1, 2, 3]
   },

   fontawesome: {
      icons: {
         solid: ['phone', 'user', 'chevron-down', 'tv', 'mug-hot', 'sun', 'moon'],
         regular: ['comment'],
         brands: ['twitter']
      }
   },

   vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "~/assets/scss/styles.scss" as *;'
          }
         },
         preprocessorMaxWorkers: true 
      }
   },

   runtimeConfig: {
      public: {
        stripePk: process.env.STRIPE_PK_KEY
      }
   },

   app: {
      head: {
         htmlAttrs: {
            lang: 'ru'
          },
         script: [
          { src: 'https://js.stripe.com/v3/', defer: true }
        ]
      }
    }
})