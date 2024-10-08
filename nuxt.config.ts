// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
      '@nuxtjs/tailwindcss',
      '@vueuse/nuxt'
  ],

  ssr: false,
  css: ['@/assets/css/main.css'],
  devServerHandlers: [],
  compatibilityDate: '2024-09-29',
})