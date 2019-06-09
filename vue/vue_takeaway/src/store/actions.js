import {reqAddress, reqCategorys, reqShop, reqUser, reqLogout, reqShopInfo, reqShopRatings, reqShopGoods, reqSearchShop} from '../api'
import {
  CLEAR_CART,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS, RECEIVE_GOODS,
  RECEIVE_INFO, RECEIVE_RATINGS, RECEIVE_SEARCH_SHOPS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-types'

export default {
// 异步获取地址
  //其实这个写法就和下面的async 一样，本质是promise，为了避免太多回调
  //  getAddress({commit,state}){
  //   const geohash=state.latitude+','+state.longitude;
  //   const result= reqAddress(geohash).then(result=>commit(RECEIVE_ADDRESS,{address:result.data}))
  // },
  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude;
    const result = await reqAddress(geohash)
    commit(RECEIVE_ADDRESS, {address: result.data})
  },

  // 异步获取分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },
// 异步获取商家列表
  async getShops({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShop({latitude, longitude})
    commit(RECEIVE_SHOPS, {shops: result.data})
  },

  async recordUserInfo({commit}, userInfo) {
    // console.log(userInfo)
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  async getUserInfo({commit}) {
    const result = await reqUser();
    if (result.code === 0) {
      commit(RECEIVE_USER_INFO, {userInfo: result.data})
    }
  },// 退出登陆
  async logout({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },
  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, {info})
      // cb && cb()
    }
  },
  // 异步获取商家评价列表
  async getShopRatings({commit}, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      //callback 用于数据更新了, 通知一下组件
      callback && callback();
    }
  },
// 异步获取商家商品列表
  async getShopGoods({commit}, cb) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
// 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      cb && cb()
    }
  },

  updateFoodCount({commit}, {food, isAdd}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },
  // 同步清空购物车
  clearCart({commit}) {
    commit(CLEAR_CART)
  },

  // 异 步 搜 索 商 家 列 表
  async searchShop({commit, state}, keyword) {
    // const {latitude, longitude} = state
    const latitude=state.latitude;
    const longitude=state.longitude;
    const result = await reqSearchShop(latitude + ',' + longitude, keyword)
    if (result.code===0) {
      commit(RECEIVE_SEARCH_SHOPS, {searchShops: result.data})
    }
  },

}
