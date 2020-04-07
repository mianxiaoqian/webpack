<template>
  <div class="menu-com">
    菜单列表页组件
    <ul v-for="menu of menuList" :key="menu.name">
      <li @click="goMenuDetail(menu)">{{menu.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menu-com',

  components: {
  },

  filters: {
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
