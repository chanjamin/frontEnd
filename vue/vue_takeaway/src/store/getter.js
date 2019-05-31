export default {
  totalCount(state){
    //reduce特有写法
    return state.cartFoods.reduce((pre,food)=>pre+food.count,0)
  },
  totalPrice(state){
    return state.cartFoods.reduce((previousValue, currentValue, ) =>previousValue+currentValue.count*currentValue.price,0)
  },
}
