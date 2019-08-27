<template>
  <div>
    <div class="warp">
      scss
      <div class="text">text</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scss'
}
</script>

<style scoped lang="scss">
.warp {
  color: $color-red;
  .text {
    color: $color-gray;
  }
}
</style>
