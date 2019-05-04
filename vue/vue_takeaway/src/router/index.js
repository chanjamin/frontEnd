import Vue from 'vue'
import Router from 'vue-router'

//写不写vue都可以
import Msite from '../page/Msite/Msite'
import Search from '../page/search/search'
import Order from '../page/order/order.vue'
import Profile from '../page/profile/profile';
import Login from '../page/Login/Login';
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
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component: Login
    }
  ]
})
