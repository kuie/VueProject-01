"use strict";
import Vue from 'vue'
import Router from 'vue-router'
/**
 * 页面文件引入
 * */
import index from '@/components/index'
import Start from '@/components/Start'
import field from '@/components/field'
import login from '@/components/login'
import register from '@/components/register'

Vue.use(Router);

export default new Router({
  routes: [
    /**
     * 登陆后主页*/
    {
      path:'/index',
      name:'index',
      component:index
    },
    /**
     * 开始页*/
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/field',
      name: 'field',
      component: field
    },
    /**
     * 登录页*/
    {
      path: '/login',
      name: 'login',
      component: login
    },
    /**
     * 注册页*/
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
