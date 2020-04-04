<!--
 * @Author: qianqian.zhao
 * @Date: 2020-04-03 16:25:11
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-04-04 17:02:51
 * @Description: 首页
 -->
<template>
  <div class="home">
    这里是首页
    <el-button type="primary" @click="goMeal">去抽菜名</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',

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
  },

  watch: {
  },

  mounted () {
  },

  methods: {
    // 跳转到菜单页
    goMeal () {
      this.$router.push('/selectMeal');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
