<template>
  <div class="login">
    <Form :model="loginForm" :label-width="80">
      <FormItem label="用户名：">
        <Input v-model="loginForm.u_id" placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem label="登录密码：">
        <Input v-model="loginForm.u_pwd" placeholder="请输入密码" type="password"></Input>
      </FormItem>
    </Form>
    <Button @click="login">登陆</Button>
    <Button @click="register">注册</Button>
  </div>
</template>
<script>
  "use strict";

  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          u_id: '',
          u_pwd: ''
        }
      }
    },
    methods: {
      login: function () {
        this.$axios.post('/api/users/login')
          .then((obj) => {
            alert(obj.data);
          })
          .catch(() => {
          });
      },
      register: function () {
        this.$router.replace({path: '/register'});
      }
    },
    components: {}
  }
</script>
<style lang="less" scoped>
  @import "../common.conf/theme";

  .login {
    width: 50%;
    margin: auto;
  }
</style>
