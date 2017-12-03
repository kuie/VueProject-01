<template>
  <div class="field">
    <Row>
      <Col span="8">
      <Menu accordion>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            个人信息
          </template>
          <MenuItem>
            <router-link to="/">文章管理</router-link>
          </MenuItem>
          <MenuItem>
            <router-link to="/">评论管理</router-link>
          </MenuItem>
          <MenuItem>
            <router-link to="/">举报管理</router-link>
          </MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
      </Col>
    </Row>
  </div>
</template>
<script>

  export default {
    name: 'field',
    data() {
      return {
        menus: [
          {
            name: '1',
            title: '内容管理',
            icon: 'ios-paper',
            items: [
              {name: '1', title: '文章管理'},
              {name: '2', title: '评论管理'},
              {name: '3', title: '举报管理'},
            ]
          },
          {
            name: '2',
            title: '用户管理',
            icon: 'ios-people',
            items: [
              {name: '1', title: '新增用户'},
              {name: '2', title: '活跃用户'}
            ]
          },
          {
            name: '3',
            title: '统计分析',
            icon: 'stats-bars',
            items: [
              {name: '1', title: '新增和启动'},
              {name: '2', title: '活跃分析'},
              {name: '3', title: '时段分析'},
              {name: '4', title: '用户留存'},
              {name: '5', title: '流失用户'},
            ]
          }
        ]
      }
    },
    watch: {},
    computed: {},
    methods: {},
    components: {
    }
  }
</script>
<style scoped lang="less"></style>
