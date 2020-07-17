
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/onesignal",
    "@nuxtjs/pwa"
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  pwa: {
    workbox: {
      /* workbox options */
    }
  },
  manifest: {
    name: "サンプルアプリ",
    title: "サンプルアプリ",
    'og:title': 'サンプルアプリ',
    description: '',
    'og:description': '',
    lang: 'ja',
    theme_color: "#529b58",
    background_color: "#bde0c0",
    display: "standalone",
    scope: "/",
    start_url: "/"
  },
  oneSignal: {
    init: {
      appId: '309088fc-0d36-46f0-8819-02de872611ca',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  }
}
