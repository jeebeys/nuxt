// 方法 1
import '@/assets/iconfont/iconfont.css'
// import '@/assets/iconfont/iconfont.js'
import '@/assets/css/animate.css'
// 方法 2
// {
//   rel: 'stylesheet',
//   href: 'https://at.alicdn.com/t/font_976945_uz2xq0nsz8p.css'
// }
// 配置 nuxt.config.js head > link
// 方法 3 antd
import Vue from 'vue'
import { Icon } from 'ant-design-vue/lib'

// Vue.use(VueIconFont)
const vIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1187486_t1qzfqftq4p.js'
  // scriptUrl: '../../assets/iconfont/iconfont.js'
})

Vue.component('v-icon', vIcon)
