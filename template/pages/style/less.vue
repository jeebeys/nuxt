<template>
  <div class="warp">
    less
    <div class="text">text</div>
  </div>
</template>

<script>
export default {
  name: 'Less'
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
