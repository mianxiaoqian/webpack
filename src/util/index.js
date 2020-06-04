/*
 * @Author: qianqian.zhao
 * @Date: 2020-05-22 09:58:23
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-05-25 18:04:21
 * @Description: 发布订阅封装
 */ 
 
class TriggerObj {
  constructor () {
    // 订阅的列表对象
    this.eventList = {}
  }
  // 发布事件
  emit (key, argu) {
    const events = this.eventList[key]
    if (events && events.length) {
      events.forEach(fn => {
        fn.apply(this, ...argu)
      })
    }
  }
  // 收集事件
  on (key, fn) {
    debugger
    // const key = Array.prototype.splice.call(arguments, 0, 1)
    // const fn = arguments
    if (!this.eventList.hasOwnProperty(key)) {
      this.eventList[key] = []
    }
    this.eventList[key].push(fn)
  }

  get () {
    return this.eventList
  }
}

export default TriggerObj