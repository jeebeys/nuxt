<template>
  <div>index-foo: {{ foo }} - {{ data.t1 }}</div>
</template>

<script>
export default {
  name: 'Index',
  inject: ['foo'],
  props: {
    data: {
      type: Object,
      default() {}
    }
  },
  data() {
    return {
      foo1: this.foo
    }
  },
  mounted() {
    this.foo1 = 'abc123'
  }
}
</script>

<style scoped></style>
