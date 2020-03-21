import Mode from 'frontmatter-markdown-loader/mode';
import { routesGenerator } from './services/router';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

export default {
  mode: 'universal',
  /*
  ** Generate routes
  */
  generate: {
    routes: routesGenerator
  },
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { hid: 'charset', charset: 'utf-8' },
      { hid: 'theme-color', name: 'theme-color', content: '#4dc0b5' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
      background_color: '#FFFFFF',
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
    '~/plugins/vue-lazysizes.client.js',
    '~/plugins/fire-auth.js',
    '~/plugins/vue-inject.js'
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
        enabled: false,
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
      // Frontmatter
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'content'),
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: {
            root: 'article-body'
          },
          markdownIt: {
            html: true
          },
          mode: [Mode.VUE_COMPONENT]
        }
      });

      // CopyWebpackPlugin
      config.plugins.push(new CopyWebpackPlugin([
        {
          from: './assets/images',
          to: 'assets/images',
          toType: 'dir'
        },
        {
          from: './content/**',
          to: 'assets',
          ignore: ['*.md'],
          toType: 'dir'
        }
      ]));

      // Lazysizes
      if (ctx.isClient) {
        ctx.loaders.vue.transformAssetUrls.img = ['data-src', 'src']
        ctx.loaders.vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  }
};
