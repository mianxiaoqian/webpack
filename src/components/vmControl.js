


// 猫叫就去吃饭
// 数据劫持就劫持猫叫，依赖收集每一只猫（这只猫叫了就去吃饭）
// 数据劫持

class Animal {
  constructor () {

  }
  eat () {
    // 通知所有的依赖对象
  }
}
var catArr = []
class Cat {
  constructor (name) {
    // 这只猫的名字
    this.name = name
    // 收集猫
    catArr.push()
  }
  eat () {
    console.log('这只猫去吃饭了')
  }
  miao () {
    console.log('猫在叫')
    // 执行收集到的依赖
    const cat = catArr.unshift()
    cat()
  }
}
var xinba = new Cat('辛巴')

// 依赖收集
module.exports = {
  a: ''

}