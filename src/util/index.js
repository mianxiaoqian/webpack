/*
 * @Author: qianqian.zhao
 * @Date: 2020-05-22 09:58:23
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-05-22 10:43:20
 * @Description: 发布订阅封装
 */ 
 
class TriggerObj {
  constructor () {
    // 订阅的列表
    this.eventList = []
  }
  // 发布事件
  trigger () {
    this.eventList.forEach(fn => {
      fn.apply(this, arguments)
    })
  }
  // 收集事件
  on (fn) {
    this.eventList.push(fn)
  }
}

export default TriggerObj