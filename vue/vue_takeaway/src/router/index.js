import Vue from 'vue'
import Router from 'vue-router'

//写不写vue都可以
import Msite from '../page/Msite/Msite'
import Search from '../page/search/search'
import Order from '../page/order/order.vue'
import Profile from '../page/profile/profile';
import Login from '../page/Login/Login';
import Shop from '../page/Shop/Shop'
import ShopInfo from '../page/Shop/ShopInfo/ShopInfo'
import ShopGoods from '../page/Shop/ShopGoods/ShopGoods'
import ShopRating from '../page/Shop/ShopRating/ShopRating'
import ShopHeader from '../components/ShopHeader/ShopHeader'
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
    },
    {
      path:'/shop',
      component: Shop,
      //子路由
      children:[
        //默认路由
        {
          path:'',
          redirect:'/shop/goods'
        },
        {
          path:'/shop/goods',
          component:ShopGoods
        },{
          path:'/shop/rating',
          component:ShopRating
        },{
          path:'/shop/info',
          component:ShopInfo
        }
      ]

    }
  ]
})
