// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image',
  ],
  ssr: false,
  app: {
    baseURL: '/nuxt-app/'
  },
  image: {
    format: ['webp'],
    quality: 80,
  }
  
  
});
