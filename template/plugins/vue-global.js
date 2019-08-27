import Vue from 'vue'
// 取消 Vue 所有的日志与警告
Vue.config.silent = true
Vue.global = function() {
  return 'global-1'
}

Vue.prototype.global = function() {
  return 'global-2'
}
