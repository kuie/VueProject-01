<template>
  <div id="app">
    <div class="layout">
      <div class="layout-ceiling">
        <div class="layout-ceiling-main">
          <router-link v-for="item in links" :to="item.href">{{item.text}}</router-link>
        </div>
      </div>
      <div class="layout-header">
        <div class="layout-logo" v-text="title"></div>
      </div>
      <router-view></router-view>
      <div class="layout-footer">
        页足部分
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: '同仁堂阿胶',
        links: [{href: '/', text: "主页"},
          {href: '/login', text: "登陆/注册"}
        ],
        mainNav:
          [
            {href: '/', text: "主页"},
            {href: '/login', text: "登陆/注册"}
          ]
      }
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  /*变量定义区*/
  @import "common.conf/theme";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    .box(30px, 100px);
    background-color: @blue;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    line-height: 30px;
    color: #fff;
    font-weight: bolder;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-ceiling {
    background: @blue;
    padding: 10px 0;
    overflow: hidden;
  }

  .layout-ceiling-main {
    float: right;
    margin-right: 15px;
    a {
      padding: 15px;
      color: #fff;
    }
  }

  .layout-footer {
    height: @mainHeaderHeight;
    line-height: @mainHeaderHeight;
    color: #fff;
    background-color: @blue;
  }
</style>
