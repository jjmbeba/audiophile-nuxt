// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:[
    '@/assets/css/main.css'
  ],
  modules:['@nuxtjs/tailwindcss'],
  app:{
    head:{
      title:'Audiophile',
      meta:[
        {name:'description', content:'Audio ecommerce website'}
      ]
    }
  }
})
