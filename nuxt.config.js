import Mode from 'frontmatter-markdown-loader/mode';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#4dc0b5' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize one signal
  */
  oneSignal: {
    init: {
      appId: '2d305783-e16d-4519-b070-f0ec96d24d5c',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false
      }
    }
  },
  /*
  ** Customize pwa
  */
  pwa: {
    manifest: {
      lang: 'en',
      name: 'findMe.travel',
      short_name: 'findMe.travel',
      theme_color: '#4dc0b5',
      background_color: '#4dc0b5',
      description: 'Best place to get lost in world'
    },
    workbox: {
      offlineAnalytics: true
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/analytics-module
    ['@nuxtjs/google-analytics', {
      id: 'UA-155240781-1',
      debug: {
        enabled: true,
        sendHitTask: true
      }
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.VUE_COMPONENT]
        }
      });
    }
  }
};
