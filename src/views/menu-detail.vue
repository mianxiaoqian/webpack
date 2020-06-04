<!--
 * @Author: qianqian.zhao
 * @Date: 2020-04-07 19:10:26
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-06-04 10:30:22
 * @Description: 
--> 
<template>
  <div class="menu-detail">
    菜单详情页
    <div v-for="(key, index) in menuOption" :key="index">
      {{key}}
    </div>
    <!-- <el-button @click="goMenuList">返回菜单列表页</el-button> -->
    <el-button type="primary" @click="goMenuList">返回菜单列表页</el-button>
  </div>
</template>

<script>

export default {
  name: 'menu-detail',

  components: {
  },

  filters: {
  },

  mixins: [
  ],

  props: {
  },

  data () {
    return {
    }
  },

  computed: {
    menuOption () {
      return JSON.parse(this.$route.query.menuOption)
    }
  },

  watch: {
  },

  mounted () {
  },

  methods: {
    goMenuList () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
