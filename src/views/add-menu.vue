<template>
  <div class="add-menu">
    新增菜单页
  </div>
</template>

<script>
export default {
  name: 'add-menu',

  components: {
  },

  filters: {
  },

  beforeCreate () {
    console.log('孙组件的beforeCreate')
  },

  created () {
    console.log('孙组件的created')
  },

  beforeMount () {
    console.log('孙组件的beforeMount')
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
    console.log('孙组件的mounted', this.$el)
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
