<!--
 * @Author: qianqian.zhao
 * @Date: 2020-04-07 19:06:20
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-06-04 14:28:49
 * @Description: 
--> 
<template>
  <div class="menu-com">
    菜单列表页组件
    <add-menu></add-menu>
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
      defult: []
    }
  },

  data () {
    return {
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
