/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-22 18:17:49
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-04-04 16:43:22
 * @Description: 单页面入口文件
 */
import Vue from 'vue';
import App from './app.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import router from './router/index.js';

Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
  router, // 注入路由，使整个应用都有路由功能
  render (fun) {
    return fun(App)
  }
}).$mount('#app');