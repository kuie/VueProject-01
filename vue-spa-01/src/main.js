
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import axios from 'axios'

Vue.use(iView);
/**
 * 设置proxyTable为后期的跨域请求做准备
 * */
Vue.prototype.$axios = axios;
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
