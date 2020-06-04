<!--
 * @Author: qianqian.zhao
 * @Date: 2020-04-07 21:01:01
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-06-04 14:44:02
 * @Description: 
--> 
<template>
  <div class="menu-com">
    菜单列表页组件
    <add-menu></add-menu>
    菜单列表页组件{{name}}
    <br>
    {{age}}
    <ul v-for="menu of menuList" :key="menu.name">
      <li @click="goMenuDetail(menu)">{{menu.name}}</li>
    </ul>
  </div>
</template>

<script>
import AddMenu from './add-menu.vue'
export default {
  name: 'menu-com',

  components: {
    AddMenu
  },

  inject: [
    'age'
  ],

  filters: {
  },

  beforeCreate () {
    console.log('子组件的beforeCreate')
  },

  created () {
    console.log('子组件的created')
  },

  beforeMount () {
    console.log('子组件的beforeMount', this.$data)
  },

  mixins: [
  ],

  props: {
    menuList: {
      type: Array,
      default: []
    },
    name: {
      type: String
    }
  },

  data () {
    return {
      subName: '这里是辛巴哦'
    }
  },

  computed: {
    // menuList () {
    //   return this.$route.query.menuList
    // }
  },

  watch: {
  },

  mounted () {
    console.log('子组件的mounted', this.$el)
  },

  methods: {
    goMenuDetail (menu) {
      this.$router.push({path: 'menuDetail', query: {menuOption: JSON.stringify(menu)}})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
