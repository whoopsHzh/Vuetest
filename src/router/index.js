import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import member from '@/components/member'
import shopcart from '@/components/shopcart'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/member',
    name: 'member',
    component: member
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: shopcart
  },
  {
    path: '/search',
    name: 'search',
    component: search
  }
  ],
  linkActiveClass: 'mui-active'
})
