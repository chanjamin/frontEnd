import {reqAddress, reqCategorys, reqShop,reqUser,reqLogout} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO,RESET_USER_INFO} from './mutation-types'

export default {
// 异步获取地址
  //其实这个写法就和下面的async 一样，本质是promise，为了避免太多回调
  //  getAddress({commit,state}){
  //   const geohash=state.latitude+','+state.longitude;
  //   const result= reqAddress(geohash).then(result=>commit(RECEIVE_ADDRESS,{address:result.data}))
  // },
  async getAddress({commit,state}){
    const geohash=state.latitude+','+state.longitude;
    const result= await reqAddress(geohash)
    commit(RECEIVE_ADDRESS,{address:result.data})
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

  async recordUserInfo({commit},userInfo){
    // console.log(userInfo)
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  async getUserInfo({commit}){
    const result=await reqUser();
    if(result.code===0){
      commit(RECEIVE_USER_INFO,{userInfo: result.data})
    }
  },// 退出登陆
  async logout({commit}) {
    const result = await reqLogout()
    if(result.code===0) {
      commit(RESET_USER_INFO)
    }
  },
}
