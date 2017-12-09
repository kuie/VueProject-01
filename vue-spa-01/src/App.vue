<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created() {
      this.setBodyHeight();
    },
    methods: {
      setBodyHeight: function () {
        document.body.style.height = window.innerHeight + 'px';
      }
    }
  }
</script>

<style scoped lang="less">
  #app {
    height: 100%;

  }
</style>
