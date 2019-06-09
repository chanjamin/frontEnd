/*
vuex 的 mutations 模块
*/
import {
  CLEAR_CART,
  DECREMENT_FOOD_COUNT, INCREMENT_FOOD_COUNT,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS, RECEIVE_GOODS, RECEIVE_INFO, RECEIVE_RATINGS, RECEIVE_SEARCH_SHOPS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-types'
import Vue from 'vue'

export default {
  //es6计算属性
  [RECEIVE_ADDRESS](state, wrapper) {
    // console.log(wrapper.address.address)
    // console.log(wrapper)
    state.address = wrapper.address;
  },
  //{category}为方法中的变量解构
  [RECEIVE_CATEGORYS]: function (state, {categorys}) {
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo=userInfo
  },
  [RESET_USER_INFO](state){
    state.userInfo={};
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    //第一次加号
    if(!food.count){
      //手动数据绑定
      Vue.set(food,'count',1)
      state.cartFoods.push(food);
    }else{
      food.count++;
    }
  },
  [DECREMENT_FOOD_COUNT](state, {food}) {
    if(food.count) {// 只有有值才去减
      food.count--
      if(food.count===0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART](state) {
    state.cartFoods.forEach(food=>food.count=0)//？因为food实例和count已经绑定了
    state.cartFoods=[];
  },

  [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
      state.searchShops=searchShops
  }
}
