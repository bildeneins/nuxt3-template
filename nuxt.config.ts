import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  components: [
    '~/components',
    '~/components/common',
    '~/components/models',
    '~/components/pages',
  ],
})
