/*
 * @Author: qianqian.zhao
 * @Date: 2020-04-04 16:05:02
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-04-04 17:00:26
 * @Description: 路由根组件
 */

import VueRouter from 'vue-router';
import Home from '@/views/home.vue';
import SelectMeal from '@/views/select-meal.vue';
import MenuList from '@/views/menu-list.vue';
import AddMenu from '@/views/add-menu.vue'
import MenuDetail from '@/views/menu-detail.vue'

let routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/selectMeal',
    component: SelectMeal
  },
  {
    path: '/menuList',
    component: MenuList,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/AddMenu',
    component: AddMenu
  },
  {
    path: '/menuDetail',
    component: MenuDetail
  }
];
routes.push(
  {
    path: '*',
    component: Home
  }
)

const router = new VueRouter({
  routes
})
export default router;