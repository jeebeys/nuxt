<template>
  <div class="container">
    <div class="err-box">
      <div class="err-code">{{ error.statusCode }}</div>
    </div>
    <div class="err-box">
      <div class="err-info">{{ error }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: '页面错误'
    }
  },
  data() {
    return {}
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    statusInfo() {
      let _info = this.info
      if (this.statusCode === 401) {
        _info = 'Expired, please try again.'
      }
      return _info
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.err-box {
  margin: 0;
  padding: 100px 0 50px;
  text-align: center;

  .err-code {
    font-size: 30px;
    text-align: center;
    padding: 15px;
    color: #a5a5a5;
    background-color: #fdfdfd;
    box-shadow: 0px 0px 15px #ddd;
    border: 1px #f67f7f dashed;
    border-radius: 8px;
    display: inline-block;
  }
  .err-info {
    font-size: 12px;
    text-align: center;
    color: #a5a5a5;
  }
}

.box {
  width: 800px;
  margin: 0 auto;
  text-align: center;

  .info {
    font-size: 15px;
    margin-bottom: 20px;
  }
}
</style>
