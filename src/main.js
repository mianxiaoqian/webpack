/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-22 18:17:49
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-04-03 17:01:05
 * @Description: 单页面入口文件
 */
import Vue from 'vue';
import App from './app.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/index.css';

// import { Button, Select } from 'element-ui';
// Vue.use(Button);
// Vue.use(Select);
Vue.use(ElementUI);

new Vue({
  render (fun) {
    return fun(App)
  }
}).$mount('#app');