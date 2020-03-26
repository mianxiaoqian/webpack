/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-26 19:45:58
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-03-26 19:54:57
 * @Description: 项目根组件
 */


import content from './views/content.js' // 引入content组件

export default {
  template:
  `<div>
    <p>这是项目的根组件</p>
    <content></content>
  </div>`,
  components: {
    content
  }
}