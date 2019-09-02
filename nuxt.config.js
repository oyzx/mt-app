
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
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
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Axios mudule configuration
  */
  axios: {

  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    // extend (config, ctx) {
    //   // if (ctx.isDev && ctx.isClient) {
    //   //   config.module.rules.push({
    //   //     enforce: 'pre',
    //   //     test: /\.(js|vue)$/,
    //   //     loader: 'eslint-loader',
    //   //     exclude: /(node_modules)/
    //   //   })
    //   // }
    // },
    extend(config, { isServer, isDev, isClient }) {
      if (isServer) {
        for (const rules of config.module.rules.filter(({ test }) =>
          /\.((c|le|sa|sc)ss|styl.*)/.test(test.toString())
        )) {
          for (const rule of rules.oneOf || []) {
            rule.use = rule.use.filter(
              ({ loader }) => loader !== 'cache-loader'
            )
          }
        }
      }
    },
    // https://github.com/nuxt/nuxt.js/issues/3804
    cache: false
  }
}
