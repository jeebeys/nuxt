<template>
  <div class="container">
    <div class="links">
      <nuxt-link to="/style/scss" class="ant-btn ant-btn-primary">
        scss
      </nuxt-link>
      <nuxt-link to="/style/less" class="ant-btn ant-btn-primary">
        less
      </nuxt-link>
    </div>
    <div class="links"><nuxt-child /></div>
  </div>
</template>

<script>
export default {
  name: 'Style'
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
