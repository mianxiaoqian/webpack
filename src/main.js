/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-22 18:17:49
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-03-25 19:22:16
 * @Description: 单页面入口文件
 */
// document.write('我的webpack配置')

// import add, { miao } from './content.js';
const Vue from 'vue';
const App from './app';
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

new Vue({
  el: '#app',
  render: (h) => h(App)
})