// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
   modules: [
   // '@nuxtjs/supabase',
      'nuxt-lodash',
      '@pinia/nuxt',
      'pinia-plugin-persistedstate/nuxt',
      '@nuxtjs/fontaine'
   ],
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