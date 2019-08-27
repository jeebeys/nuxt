import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
export default ({ store }) => {
  Vue.use(VueNativeSock, 'ws://localhost:9090', {
    store,
    format: 'json',
    connectManually: true,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 3000
  })
}
