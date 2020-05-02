<template>
  <div class="container">
    <div class="links">
      <nuxt-link to="/style/scss" class="ant-btn ant-btn-primary">
        scss
      </nuxt-link>
      <nuxt-link to="/style/less" class="ant-btn ant-btn-primary">
        less
      </nuxt-link>
      <div class="ant-btn ant-btn-primary" @click="etChange">change</div>
    </div>
    <div class="links"><nuxt-child :data="dat" /></div>
  </div>
</template>

<script>
export default {
  name: 'Style',
  provide() {
    console.log('life-2')
    return {
      foo: this.dat
    }
  },
  data() {
    console.log('life-1')
    return {
      dat: { t1: '123' }
    }
  },
  mounted() {
    console.log('life-3')
    console.log('init', this.dat)
  },
  methods: {
    etChange() {
      this.dat = { t1: Math.random() }
      this.foo = '123'
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
