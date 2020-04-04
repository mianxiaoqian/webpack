<!--
 * @Author: qianqian.zhao
 * @Date: 2020-03-25 18:50:33
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-04-04 16:36:29
 * @Description: 单页面首页组件
 -->

<template>
  <div class="miao">
    这是项目的根目录文件app
    <!-- <home></home> -->
    <!-- 路由匹配的组件渲染到这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './views/home'
  export default {
    name: 'app',

    components: {
      Home
    },

    filters: {
    },

    mixins: [
    ],

    props: {
    },

    data () {
      return {
        msg: 'this is my app!'
      }
    },

    computed: {
    },

    watch: {
    },
    beforeCreate () {
      console.log('App实例创建之前,什么都访问不到')
      console.log(this, this.$el, this.$option, this.$data)
    },
    created () {
      console.log('App实例创建完成，data，prop准备好')
      console.log(this, this.$el, this.$option, this.$data)
    },
    beforeMount () {
      debugger
      console.log('App实例挂载之前，进行占位？')
      console.log(this, this.$el, this.$option, this.$data)
    },
    mounted () {
      debugger
      console.log('App实例挂载完成，真实数据进行占位填充')
      console.log(this, this.$el, this.$option, this.$data)
    },

    methods: {
    }
  }
</script>

<style lang="scss" scoped>

</style>
