<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">template-nuxt {{ version }}</h1>
      <h3 class="title">{{ $store.state.count }}</h3>
      <div class="links">
        <a-button type="primary" @click="increment">increment</a-button>
        <a-button type="primary" @click="weather">weather</a-button>
      </div>
      <div class="links">
        <nuxt-link to="style" class="ant-btn ant-btn-primary">style </nuxt-link>
      </div>
      <div class="links">
        <a-button type="primary" @click="language">lang</a-button>
      </div>
      <div class="links">
        <i class="iconfont iconshouye" style="font-size: 20px; " /> {{ a }}
      </div>
      <div class="links">
        <v-icon type="iconshouye" /> {{ $store.state.m2 }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Logo.vue'
import version from '@/assets/version.json'
import secured from '@/enhance/mix-secured'

export default {
  middleware: 'front',
  components: {
    Logo
  },
  mixins: [secured],
  data() {
    return {
      build: ' build ' + version.build
    }
  },
  computed: {
    ...mapState('m1', {
      a: (state) => state.a
    })
  },
  asyncData() {
    return { version: process.VERSION }
  },
  mounted() {
    console.log('vuex1', this.$store)
    console.log('cache:', this.$cache)
    console.log('event:', this.$events)
    console.log('http:', this.$http)
    console.log('sockets:', this.$options.sockets)
  },
  beforeDestroy() {
    console.log('beforeDestroy')
    // this.$store.unregisterModule(['m2'])
  },
  methods: {
    increment() {
      this.$store.registerModule('m2', {
        namespaced: true,
        state: {
          a: '666'
        },
        mutations: {},
        actions: {},
        getters: {}
      })
      this.$store.dispatch('inc')
    },
    language() {
      this.$store.state.locale = 'cn'
      this.$cookies.set('_lang', 'cn')
      this.$i18n.locale = 'cn'
    },
    weather() {
      this.$http.get('/api/weather/city/101030100', {}).then((data) => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
