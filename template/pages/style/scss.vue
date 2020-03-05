<template>
  <div>
    <div class="warp">
      scss - {{ data.t1 }}
      <div class="text">text</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scss',
  props: {
    data: {
      type: Object,
      default() {}
    }
  }
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
