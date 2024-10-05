
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css', '~/assets/css/normalize.css', '~/assets/css/webflow.css', '~/assets/css/mdlr-28e2c3.webflow.css'],
  app: {
    head: {
      charset: 'utf-8',
      title: 'MDLR – Shop',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'generator', content: 'Webflow' },
      ],
      link: [
        {
          rel: 'shortcut icon',
          href: 'https://cdn.prod.website-files.com/5c7b4529d99ee5d38a884f51/5c7caf0dee880786abba8a56_favicon.ico',
          type: 'image/x-icon',
        },
        {
          rel: 'apple-touch-icon',
          href: 'https://cdn.prod.website-files.com/img/webclip.png',
        },
      ],
    },
  },
});
