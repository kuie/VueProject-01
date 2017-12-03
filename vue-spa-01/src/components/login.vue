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
        new Promise((resolve, reject) => {
          $.post({
            url: '/server/user/login',
            data: {},
            complete(xhr, textStatus) {
              //交互完成
            },
            success(data, textStatus, xhr) {
              //交互成功
              resolve(data);
            },
            error(xhr, textStatus, errorThrown) {
              //交互出错
              reject(xhr);
            }
          });
        })
          .then((data) => {
            alert(data);
          }, (xhr) => {

          });
      },
      register: function () {
        console.log('跳转去注册啦~~~');
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
