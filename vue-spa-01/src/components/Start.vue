<template>
  <div class="hello">
    <Button @click="register">发起注册</Button>
    <Button @click="login">发起登陆</Button>
    <ol>
      <li v-for="todo in todos">
        <Button>{{todo}}</Button>
      </li>
    </ol>
  </div>
</template>
<script>
  "use strict";
  import {Button} from 'iview'

  export default {
    name: 'hello',
    data() {
      return {
        field: 'filed',
        msg: 'Welcome to Your Vue.js App',
        message: '页面加载于' + new Date().toLocaleString(),
        todos: [1, 2, 3, 4]
      }
    },
    methods: {
      register: function () {
        /*es6构造器*/
        /*class person {
          constructor(prop) {
            this.name = prop.name;
            this.age = prop.age;
          }

          showName() {
            return this.name
          }

          showAge() {
            return this.age;
          }
        }

        class worker extends person {
          constructor(prop) {
            super(prop);
            this.job = prop.job || 'No job';
          }

          showJob() {
            console.log(this.job);
          }

          static doSomeThing(dst) {
            return dst > 20 ? 'yes I Do!' : 'No Way!';
          }
        }

        let abb = new person({name: 'abb', age: 31});
        let acc = new person({name: 'acc', age: 27});
        let zp_field = new worker({name: 'zp_field', age: 28, job: 'web'});
        console.log(abb.showAge());
        console.log(acc.showName());
        console.log(zp_field.showName());
        console.log(zp_field.showAge());
        console.log(zp_field.showJob());
        console.log(zp_field);
        console.log(worker.doSomeThing(Math.random() * 100));*/
        new Promise((resolve, reject) => {
          /*ajax请求*/
          $.post({
            url: '/server/user/register',
            data: {uid: '312'},
            complete(xhr, textStatus) {
              //called when complete
            },
            success(data, textStatus, xhr) {
              //called when successful
              resolve(data);
            },
            error(xhr, textStatus, errorThrown) {
              //called when there is an error
              reject(xhr);
            }
          });
        })
          .then((data) => {
            this.todos.push({text: data});
            return data;
          }, (xhr) => {
//            throw xhr.responseText;
            console.group('请求失败');
            console.log(xhr.statusText);
            console.groupEnd();
          })
          .then((data) => {
          }, (xhr) => {
          });
      },
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
            this.todos.push({text: data})
          }, (xhr) => {

          });
      }
    },
    components: {
      Button
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    color: red;
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
