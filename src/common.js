/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-25 18:32:18
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-03-25 18:44:58
 * @Description: commonJs 模块
 */

 module.exports = {
   name: '辛巴',
   age: '2',
   changeAge () {
     age = 3;
   },
   getAge () {
     console.log(age);
   }
 }

 document.write('common.js模块,对模块的依赖是动态的, 依赖关系建立发生在代码运行阶段')