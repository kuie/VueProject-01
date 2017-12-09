<template>
  <div class="index">
    <div class="layout">
      <div class="layout-header">
        <div class="searchBar">
          <div @click="toScanner" class="h-scan">
            <Icon type="qr-scanner" size="25"></Icon>
            <p>扫一扫</p>
          </div>
          <div class="h-search">
            <Form>
              <FormItem>
                <Input :value="searchKeyWord" placeholder="搜索商品，共10420款好物"></Input>
              </FormItem>
            </Form>
          </div>
          <div class="h-message">
            <Icon type="ios-bell" size="25"></Icon>
            <p>消息</p>
          </div>
        </div>
        <div class="mainNavBarBox">
          <p>全部频道</p>
          <ul class="mainNavBar">
            <li v-for="item in mainTabs" :class="item.class" @click="selectTab">{{item.title}}</li>
          </ul>
          <Icon class="mainNavBarIcon" type="ios-arrow-down" size="20"></Icon>
        </div>
      </div>
      <div>
        <!--mainViewPort-->
      </div>
      <div class="layout-footer"></div>
    </div>
  </div>
</template>
<script>
  "use strict";
  export default {
    name: 'index',
    data() {
      return {
        searchKeyWord: null,
        mainTabs: [
          {title: '推荐', ref: '/tuijian', class: 'select'},
          {title: '新品', ref: '/tuijian', class: ''},
          {title: '限时购', ref: '/tuijian', class: ''},
          {title: '居家', ref: '/tuijian', class: ''},
          {title: '餐厨', ref: '/tuijian', class: ''},
          {title: '配件', ref: '/tuijian', class: ''},
          {title: '服装', ref: '/tuijian', class: ''},
          {title: '电器', ref: '/tuijian', class: ''},
          {title: '洗护', ref: '/tuijian', class: ''},
          {title: '杂货', ref: '/tuijian', class: ''},
          {title: '饮食', ref: '/tuijian', class: ''},
          {title: '童婴', ref: '/tuijian', class: ''},
          {title: '志趣', ref: '/tuijian', class: ''},
        ]
      }
    },
    watch: {},
    created() {
    },
    methods: {
      /**
       * todo 添加扫码支持
       * */
      toScanner: function () {
      },
      selectTab: function (event) {
        let liText = event.target.innerText, oldVal, newVal;
        /**
         * todo 加载新模块到mainViewPort
         * */
        let getNewPage = (ref) => {
          console.log(ref);
        };
        let moveSelect = (oldVal, newVal) => {
          if (oldVal === newVal) return getNewPage(this.mainTabs[newVal].ref);
          this.mainTabs[oldVal].class = '';
          oldVal < newVal ? ++oldVal : --oldVal;
          this.mainTabs[oldVal].class = 'select';
          setTimeout(() => {
            moveSelect(oldVal, newVal);
          }, 30);
        };
        this.mainTabs.map((val, key) => {
          val.title === liText && (newVal = key);
          val.class === 'select' && (oldVal = key);
        });
        moveSelect(oldVal, newVal);
      }
    }
  }
</script>
<style lang="less" scoped>
  /*搜索框*/
  .searchBar {
    padding-top: 10px;
    display: flex;
    .h-scan, .h-message {
      flex-basis: 50px;
      text-align: center;
    }
    .h-search {
      flex: 1;
    }
  }

  /*顶层主导航*/
  .mainNavBarBox {
    overflow: hidden;
    position: relative;
  }

  .mainNavBarIcon {
    width: 50px;
    position: absolute;
    right: 15px;
    top: 15px;
  }

  .mainNavBar {
    overflow-x: hidden;
    /*width: max-content;*/
    &.show {

    }
    li {
      float: left;
      width: 90px;
      text-align: center;
      height: 30px;
      line-height: 30px;
      &.select {
        border-bottom: 2px solid #cf000e;
      }
    }
  }
</style>
