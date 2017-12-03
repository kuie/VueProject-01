"use strict";
import Vue from 'vue'
import Router from 'vue-router'
/**
 * 页面文件引入
 * */
import Start from '@/components/Start'
import field from '@/components/field'
import login from '@/components/login'
import register from '@/components/register'

Vue.use(Router);

export default new Router({
  routes: [
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
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
