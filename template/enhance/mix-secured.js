export default {
  methods: {
    authorized(roles) {
      // 页面允许的角色
      const _roles = roles.split(',')
      // 用户拥有的角色
      const _currs = (this.$store.state.session._role || '').split(',')
      for (let i = 0; i < _currs.length; i++) {
        if (_roles.includes(_currs[i].substr(5))) {
          return true
        }
      }
      return false
    }
  }
}
