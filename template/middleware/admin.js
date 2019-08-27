export default function({ app, req, res, store, route, redirect }) {
  if (process.client) {
  }

  if (process.server) {
  }

  /** 处理登录验证 */
  // if (route.fullPath === '/admin/login') {
  //   // 参考
  //   if (store.state.session._auth != null) {
  //     return redirect('/admin')
  //   }
  //   return
  // }
  // /** 未登录 定向到登录页 方法一 */
  // if (store.state.session._auth == null) {
  //   app.$cookies.set('_path', route)
  //   return redirect('/admin/login')
  // }
}
