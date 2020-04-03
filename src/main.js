/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-22 18:17:49
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-04-03 15:22:10
 * @Description: 单页面入口文件
 */
import Vue from 'vue';
import App from './app.js';

new Vue({
  // components: {
  //   app
  // }
  // el: '#app',
  render: (h) => {
    return h(App)
  }
}).$mount('#app')