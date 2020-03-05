<template>
  <div class="warp">
    less- {{ data.t1 }}
    <div class="text">text</div>
  </div>
</template>

<script>
export default {
  name: 'Less',
  props: {
    data: {
      type: Object,
      default() {}
    }
  }
}
</script>

<style scoped lang="less">
.warp {
  color: @red1;
  .text {
    color: @green_text1;
  }
}
</style>
