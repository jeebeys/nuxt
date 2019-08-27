import Vue from 'vue'
import '~/enhance/vue-extends'
import xhttp from '@jeebey/vue-request'
import cache from '@jeebey/vue-vcached'

export default ({ app, store }) => {
  Vue.use(cache, { prefix: 'weedo' })
  Vue.use(xhttp, {
    interceptor(response) {
      if (typeof window !== 'undefined') {
        console.log(window.$nuxt.$router)
        console.log(window.$nuxt.$cache)
        console.log(window.$nuxt.$store)
        console.log(window.$nuxt.$cache)
      }
    }
  })
}
