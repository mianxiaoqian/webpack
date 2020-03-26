/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-22 18:17:49
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-03-26 20:00:08
 * @Description: 单页面入口文件
 */
// document.write('我的webpack配置')
// import './style.css';
// import add, { miao } from './views/content.js';
import Vue from 'vue';
import app from './app.js';
// const requireCommon = false
// let commonJs = null
// if (requireCommon) {
//   commonJs = require('./common.js')
// }
// document.write(miao);
// document.write(commonJs.name);
// document.write(commonJs.age);
// commonJs.changeAge();
// document.write(commonJs.getAge());
// document.write(commonJs.age);

// new Vue({
//   el: '#app',
//   render: (h) => h(App) // 渲染函数
// })

new Vue({
  template: '<app></app>',
  components: {
    app
  }
}).$mount('#app')