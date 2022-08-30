import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: true
    },

    //css
    css: ['~/assets/scss/index.scss'],

    // auto import components
    components: true,

    // build modules
    modules: ['@vueuse/nuxt', '@pinia/nuxt'],

    // vueuse
    vueuse: {
        ssrHandlers: true,
    },
})
