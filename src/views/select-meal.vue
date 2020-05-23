<!--
 * @Author: qianqian.zhao
 * @Date: 2020-04-03 16:44:04
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-04-04 17:09:49
 * @Description: 选择菜单
 -->
<template>
  <div class="select-meal">
    <input type="text" name="" oninput="value=value.replace(/[^\d]/g,'')">
    喵呜，菜单，啦啦啦
    <br>
    <el-checkbox-group v-model="todayMenu">
      <el-checkbox v-for="item in menuList" :key="item" :label="item" :value="item">
        {{item}}
      </el-checkbox>
    </el-checkbox-group>

    <div>
      <el-button @click="deletePersonFood('yuxi')">喵呜，昱晰不吃</el-button>
      以下食物将不会参与抽签:
      <template v-for="item of yuxi">
        <span :key="item">{{item}},</span>
      </template>
      <br>
      <el-button @click="deletePersonFood('laodu')">喵呜，老杜不吃</el-button>
      以下食物将不会参与抽签:
      <template v-for="item of laodu">
        <span :key="item">{{item}},</span>
      </template>
      <br>
      <el-button @click="deletePersonFood('biyun')">喵呜，碧云不吃</el-button>
      以下食物将不会参与抽签:
      <template v-for="item of biyun">
        <span :key="item">{{item}},</span>
      </template>
    </div>

    <el-button @click="checkMenu">点击抽取吃啥</el-button>


    <br>
    <div>我想让你今天吃{{todayselected}}</div>
    <!-- {{menuArr}} -->
  </div>
</template>

<script>
export default {
  name: 'selectMeal',

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
      menuList: ['米线', '麻辣烫', '陕西老碗', '淮南牛肉面', '寿司', '脱骨鸡', '重庆小面',
        '小笼包', '德克士', '麦当劳', '食其家', '粥饼世家', '冷面', '花甲', '牛肉粉', '黄焖鸡', '鸡丝凉面', '挑面官', '米粉', '小食札记'],
      yuxi: ['老包子', '小笼包', '德克士', '麦当劳', '寿司', '脱骨鸡'],
      laodu: ['凉皮', '衢饭儿', '陕西老碗', '重庆小面'],
      biyun: [],
      copyMenuList: [
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
      todayMenu: [],
      todayselected: '',
    }
  },

  computed: {
  },

  watch: {
  },

  mounted () {
    console.log('实例挂载完成');
    this.todayMenu = this.menuList;
  },

  methods: {
    checkMenu() {
      const menuLength = this.todayMenu.length;
      const todayselected = Math.floor(Math.random() * menuLength);
      this.todayselected = this.todayMenu[todayselected];
    },
    deletePersonFood(person) {
      this.todayMenu = this.todayMenu.filter(item => !this[person].includes(item));
    },
  }
}
</script>

<style lang="scss" scoped>
input:hover {
  outline-width: 0;
  // display: none;
}
</style>
