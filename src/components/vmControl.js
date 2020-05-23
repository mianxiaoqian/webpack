/*
 * @Author: qianqian.zhao
 * @Date: 2020-04-16 21:29:39
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-04-16 22:03:52
 * @Description: 
 */



// 猫叫就去吃饭
// 数据劫持就劫持猫叫，依赖收集每一只猫（这只猫叫了就去吃饭）
// 数据劫持


// 列表进行依赖收集
var catArr = []
class Animal {
  constructor (name) {
    this.name = name
    this.on(this.eat)
  }
  eat () {
    console.log(name, '去吃饭了')
  }
  // 依赖收集函数
  on (fn) {
    catArr.push(fn)
  }

  // 劫持这个数据，当监听到就进行广播执行
  emit () {
    console.log(name, '在叫')
    catArr.forEach(fn => {
      fn()
    })
  }
}


class Cat extends Animal {
  constructor (name) {
    super(name)
    // // 执行依赖收集
    // on(eat)
  }
}
var xinba = new Cat('辛巴')

// 必要时进行广播，何时广播应该看数据劫持，当数据劫持监听到数据变化时就可以进行广播
// xinba.emit()

// 一个对象，我们监听他的数据变化
var obj = {
  attr: 'text'
}
Object.defineProperty(obj, 'attr', {
  get () {
    console.log('数据进行了读操作')
  },
  set () {
    // 数据进行写操作，触发数据监听,进行广播
    console.log('数据进行了写入操作')
    xinba.emit()
  }
})

// 依赖收集
export default obj