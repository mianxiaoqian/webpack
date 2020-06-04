<!--
 * @Author: qianqian.zhao
 * @Date: 2020-04-03 16:25:11
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-06-04 14:44:46
 * @Description: 首页
 -->
<template>
  <div class="home">
    这里是首页{{name}}{{age}}
    <br>
    <el-button @click="changeName()">切换数据</el-button>
    <el-button type="primary" @click="goMeal">去抽菜名</el-button>
    <!-- <el-button type="primary"
      :menu-list="menuList" 
      @click="goMenuList">跳转到菜单列表页</el-button> -->
      <menu-list :menu-list="menuList"></menu-list>
      <menu-list :menu-list="menuList"></menu-list>
      <menu-list ref="menuList" :menu-list="menuList" :name="name"></menu-list>
  </div>
</template>

<script>
import MenuList from './menu-list.vue'
import TriggerObj from '@/util/index.js'
import xinba from '@/components/vmControl.js'
export default {
  name: 'home',

  provide () {
    return {
      age: this.age
    }
  },

  components: {
    MenuList
  },

  beforeCreate () {
    console.log('home组件的beforeCreate')
  },

  created () {
    console.log('home组件的传reated')
  },

  beforeMount () {
    console.log('home组件的beforeMount')
  },

  filters: {
  },

  mixins: [
  ],

  props: {
  },

  data () {
    return {
      menuList: [
        {
          name: '米线',
          cold: false,
          spicy: false,
        },
        {
          name: '酸辣粉',
          cold: false,
          spicy: false,
        },
        {
          name: '麻辣烫',
          cold: false,
          spicy: false,
        },
        {
          name: '凉皮',
          cold: false,
          spicy: false,
        },
        {
          name: '淮南牛肉面',
          cold: false,
          spicy: false,
        },
        {
          name: '寿司',
          cold: false,
          spicy: false,
        },
        {
          name: '脱骨鸡',
          cold: false,
          spicy: false,
        },
        // {
        //   name: '屋力家',
        //   cold: false,
        //   spicy: false,
        // },
        {
          name: '老包子',
          cold: false,
          spicy: false,
        },
        {
          name: '小笼包',
          cold: false,
          spicy: false,
        },
        {
          name: '德克士',
          cold: false,
          spicy: false,
        },
        {
          name: '麦当劳',
          cold: false,
          spicy: false,
        },
        {
          name: '食其家',
          cold: false,
          spicy: false,
        },
        {
          name: '粥饼世家',
          cold: false,
          spicy: false,
        },
        {
          name: '香锅',
          cold: false,
          spicy: false,
        },
        {
          name: '冷面',
          cold: false,
          spicy: false,
        },
        {
          name: '衢饭儿',
          cold: false,
          spicy: false,
        },
        {
          name: '花甲',
          cold: false,
          spicy: false,
        },
        {
          name: '牛肉粉',
          cold: false,
          spicy: false,
        },
      ],
      name: '现在是喵呜',
      age: 1
    }
  },

  computed: {
  },

  watch: {
  },

  mounted () {
    console.log('home组件的mounted')
    // 定义一个销售实例
    const saleStore = new TriggerObj()

    // 去进行订阅消息
    saleStore.on('mapChange', function () {
      console.log('收到了通知', ...arguments)
    })


    console.log(saleStore.get())
    // 有新消息了，触发通知
    // saleStore.emit('mapChange', '触发，进行事件广播，所有订阅者都将收到消息')
    // console.log(xinba)
    // xinba.attr = '新值'
  },

  methods: {
    // 跳转到菜单页
    goMeal () {
      this.$router.push('/selectMeal');
    },
    changeName () {
      // this.name='现在变成了辛巴';
      this.age = 2;
      this.name = this.$refs.menuList.subName
    }
    // goMenuList () {
    //   this.$router.push({path: '/menuList', query: {menuList: this.menuList}});
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>
