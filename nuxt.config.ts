import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: [],
  head: {
    title: "it's me",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'MEVN developer portfolio ganpatjangra',
        name: 'ganpatjangra, ganpat jangra',
        author:'ganpat jangra',
        keywords:'developer jangra ganpat website ganpatjangra web portfolio',
         content: 'Hi, I am ganpat jangra. I am a web dev and mevn learner.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // nitro: {
  //   preset: 'server',
  //   timing: true
  // },
  css: [
    "~/assets/css/tailwind.css"
  ],
})
