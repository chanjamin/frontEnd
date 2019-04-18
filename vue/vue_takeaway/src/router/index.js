import Vue from 'vue'
import Router from 'vue-router'

//写不写vue都可以
import Msite from '../page/Msite/Msite'
import Search from '../page/search/search'
import Order from '../page/order/order.vue'
import Profile from '../page/profile/profile'
Vue.use(Router)

//es6导出
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/search',
      component: Search
    },
    {
      path:'/order',
      component: Order
    },
    {
      path:'/profile',
      component: Profile
    }
  ]
})
