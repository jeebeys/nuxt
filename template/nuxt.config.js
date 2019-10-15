import Webpack from 'webpack'
import WebpackComplierVersionPlugin from '@jeebey/vue-version'
import WebpackCompressionPlugin from 'compression-webpack-plugin'
import GitRevisionPlugin from 'git-revision-webpack-plugin'
import pkg from './package'
const _gitRevisionPlugin = new GitRevisionPlugin()
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  router: {
    middleware: ['_i18n']
  },
  /*
   ** Global CSS
   */
  css: ['ant-design-vue/dist/antd.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-ui', ssr: true },
    { src: '~/plugins/vue-i18n', ssr: true },
    { src: '~/plugins/vue-global', ssr: true },
    { src: '~/plugins/vue-assets', ssr: true },
    { src: '~/plugins/vue-stored', ssr: false },
    { src: '~/plugins/vue-socket', ssr: false },
    { src: '~/plugins/vue-events', ssr: false },
    { src: '~/plugins/vue-client', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: process.env.PROXY
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: [
      'axios',
      '~enhance/mix-secured.js',
      '~enhance/vue-execute.js',
      '~enhance/vue-extends.js',
      '~enhance/vue-throttle.js'
    ],
    devtools: true,
    plugins: [
      new Webpack.DefinePlugin({
        'process.VERSION': 20190612,
        'process.git_version': JSON.stringify(_gitRevisionPlugin.version()),
        'process.git_commit': JSON.stringify(_gitRevisionPlugin.commithash()),
        'process.git_branch': JSON.stringify(_gitRevisionPlugin.branch())
      }),
      new Webpack.BannerPlugin({
        banner: 'jeebey.com AT ' + new Date().toString()
      }),
      new WebpackComplierVersionPlugin({
        path: './assets/version.json',
        format: 'YYYYMMDDHHmm',
        gitver: _gitRevisionPlugin.version(),
        branch: _gitRevisionPlugin.branch()
      }),
      new WebpackCompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|html)$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    styleResources: {
      scss: './assets/style/color.scss',
      less: './assets/style/color.less'
    },
    filenames: {
      app: ({ isDev }) =>
        isDev ? '[name].js' : `[name].${pkg.version}.js?[chunkhash]`,
      chunk: ({ isDev }) =>
        isDev ? '[name].js' : `[name].${pkg.version}.js?[chunkhash]`,
      css: ({ isDev }) => (isDev ? '[name].css' : '[contenthash].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]'),
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]'
    }
  },
  proxy: {
    '/api': {
      target: 'http://t.weather.sojson.com/',
      pathRewrite: {
        '^/api': '/api'
      }
    }
  }
}
