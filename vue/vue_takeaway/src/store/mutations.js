/*
vuex 的 mutations 模块
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS, RECEIVE_GOODS, RECEIVE_INFO, RECEIVE_RATINGS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-types'

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
}
