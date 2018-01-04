// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import axios from 'axios'
import echarts from 'echarts';

/**
 * 生产模式下调整为false 调试模式下打开
 */
Vue.config.devtools = true;
/**
 * 加载iView插件
 * */
Vue.use(iView);
import 'iview/dist/styles/iview.css';
/*echarts图表*/
Vue.use(echarts);

/**
 * 设置proxyTable为后期的跨域请求做准备
 * */
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

/**
 * error操作
 * */
Vue.config.errorHandler = (err, vm, info) => {
  console.group('Vue Error Info');
  console.error(err);
  console.info(info);
  console.groupEnd();
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
