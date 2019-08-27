export const plugins = []

export const state = () => ({
  session: {},
  message: '',
  socket: '',
  locale: 'cn',
  count: 0
})

export const mutations = {
  sessiond(state, session) {
    state.session = session
  },
  increment(state, count) {
    state.count = parseInt(state.count) + parseInt(count == null ? 1 : count)
  },
  language(state, locale) {
    state.locale = locale
  },
  SOCKET_ONOPEN(state, event) {},
  SOCKET_ONMESSAGE(state, message) {
    state.message = message
  },
  SOCKET_ONCLOSE(state, event) {},
  SOCKET_ONERROR(state, event) {},
  SOCKET_RECONNECT(state, count) {},
  SOCKET_RECONNECT_ERROR(state) {}
}

export const actions = {
  async nuxtServerInit(
    { dispatch, commit, getters, state },
    { app, req, res }
  ) {
    commit('sessiond', {
      _auth: app.$cookies.get('_auth'),
      _user: app.$cookies.get('_user'),
      _role: app.$cookies.get('_role')
    })
  },

  async inc({ commit }, count) {
    commit('increment', count)
  },
  /* 退出 */
  async logout({ commit }, app) {
    if (app.$cookies) {
      app.$cookies.remove('_auth')
      app.$cookies.remove('_user')
      app.$cookies.remove('_role')
    }
    commit('sessiond', {
      _auth: null,
      _user: null,
      _role: null
    })
    app.$router.push('/admin/login')
  },
  /* 登录 */
  async login({ commit }, app) {
    if (app.$cookies) {
      app.$cookies.remove('_path')
    }
    commit('sessiond', {
      _auth: app.$cookies.get('_auth'),
      _user: app.$cookies.get('_user'),
      _role: app.$cookies.get('_role')
    })
    const _path = this.$cookies.get('_path') || '/admin'
    app.$router.push(_path)
  }
}
