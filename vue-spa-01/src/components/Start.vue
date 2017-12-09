<template>
  <div class="hello">
    <Spin fix>
      <div class="loadingBox">
        <svg viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="25" :fill="Color" fill-opacity="0.2"></circle>
          <circle class="path" cx="50" cy="50" r="20" :fill="Color" fill-opacity="0.4"></circle>
          <circle class="path" cx="50" cy="50" r="15" :fill="Color" fill-opacity="0.6"></circle>
          <circle class="path" cx="50" cy="50" r=10 :fill="Color" fill-opacity="0.8"></circle>
          <circle class="path" cx="50" cy="50" r="5" :fill="Color" fill-opacity="1"></circle>
        </svg>
        <H2 class="loadingText">
          <Icon type="ios-download" size="25"></Icon>
          Loading...
        </H2>
      </div>
    </Spin>
  </div>
</template>
<script>
  "use strict";
  import {Button} from 'iview'

  export default {
    name: 'hello',
    computed: {},
    data() {
      return {
        Color: null,
        loadingInt: null,
      }
    },
    created() {
      this.loadingInterval()
    },
    methods: {
      loadingInterval: function () {
        /**
         * 开始加载计时器
         * */
        this.loadingInt = setInterval(this.getCircleColors, 800);
        /**
         * 停止加载计时器
         * */
        let t = setTimeout(() => {
          clearInterval(this.loadingInt);
          clearTimeout(t);
          t = this.loadingInt = null;
          /*todo 跳转到主页*/
          this.$router.replace({path: '/index'});
        }, 5000);
      },
      getCircleColors: function () {
        let getNum = () => {
          return Math.floor(Math.random() * 256);
        };
        this.Color = 'rgb(' + getNum() + ',' + getNum() + ',' + getNum() + ')';
        document.getElementsByClassName('loadingText')[0].style.color = this.Color;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    height: 100%;
    width: 100%;
    position: relative;
    border: 1px solid #eee;
  }

  .loadingBox {
    padding-bottom: 100px;
  }

  h2 {
    margin-top: 15px;
  }
</style>
