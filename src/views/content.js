/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-25 18:32:31
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-03-26 20:03:28
 * @Description: es6 模块
 */

// import './../style.css';
// document.write('es6模块, 对模块的依赖是静态的,依赖关系建立发生在代码编译阶段');
export default {
  template: '<p>这是content模块组件{{msg}}</p>',
  props: {
    msg: {
      type: String,
      default: '小花喜欢妈妈'
    }
  }
}

export const miao = '小花';