/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-26 19:45:58
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-04-03 16:11:29
 * @Description: 项目根组件
 */


// import contentMode from './views/content.js' // 引入content组件

var App = {
  template: `<div><p>这是项目的根组件app.js{{name}}</p></div>`,
  components: {
    // contentMode
  },
  data () {
    return {
      name: '小花'
    }
  },
  beforeCreate () {
    console.log('实例创建之前,什么都访问不到')
    console.log(this, this.$el, this.$option, this.$data)
  },
  created () {
    console.log('实例创建完成，data，prop准备好')
    console.log(this, this.$el, this.$option, this.$data)
  },
  beforeMount () {
    debugger
    console.log('实例挂载之前，进行占位？')
    console.log(this, App, this.$el, this.$option, this.$data)
  },
  mounted () {
    debugger
    console.log('实例挂载完成，真实数据进行占位填充')
    console.log(this, App, this.$el, this.$option, this.$data)
  },
  beforeDestory () {
    console.log('实例销毁之前，各对象都可以访问')
    console.log(this, this.$el, this.$option, this.$data)
  },
  destroyed () {
    console.log('实例已经销毁，个实例对象也销毁')
    console.log(this, this.$el, this.$option, this.$data)
  }
}
export default App;