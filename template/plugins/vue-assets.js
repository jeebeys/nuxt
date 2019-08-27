// 方法 1
import '@/assets/iconfont/iconfont.css'
import '@/assets/css/animate.css'
// 方法 2
// {
//   rel: 'stylesheet',
//   href: 'https://at.alicdn.com/t/font_976945_uz2xq0nsz8p.css'
// }
// 配置 nuxt.config.js head > link
// 方法 3
import Vue from 'vue'
import { Icon } from 'ant-design-vue/lib'
const WdIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_976945_mfv6mjcbfho.js'
})
Vue.component('wd-icon', WdIcon)
