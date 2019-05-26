<template>
  <div class="msite">

    <!--头部-->

      <HeaderTop v-bind:title="address.name" >
<!--        指定插入name=search的插槽-->
        <a class="header_search" slot="search">
          <i class="iconfont icon-sousuo"></i>
        </a>
        <a class="header_login" slot="login">
          <span class="header_login_text">登录|注册</span>
        </a>
      </HeaderTop>

    <!--导航-->

    <nav class="msite_nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" v-bind:key="index">
              <div class="food_container">
                <img :src="baseUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>

          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>

    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shop-list></shop-list>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import {mapState} from 'vuex';
  import HeaderTop from '../../components/HeaderTop/HeaderTop';
  import ShopList from '../../components/ShopList/ShopList.vue';
  export default {
    name: "Msite",
    data() {
      return {
        baseUrl: 'https://fuss10.elemecdn.com/'
      }
    },
    components:{
      HeaderTop,ShopList
    },
    //侦听属性
    watch:{
      categorys(value){//value是它自己的加强对象
        //将回调延迟到下次 DOM 更新循环之后执行，不然这个渲染会被无视
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            pagination:{
              el:'.swiper-pagination'
            },
            loop:true
          })
        })
      }
    },
    computed:{
      //vuex ,相当于把state映射到data
      ...mapState(['address','categorys']),
      //根据categorys生成二维数组
      categorysArr(){
        const {categorys}=this;
        let arr=[];
        let minArr=[];
        categorys.forEach(c=>{
          if(minArr.length===8){
            arr.push(minArr);
            minArr=[];
          }
          minArr.push(c);

        });
        return arr;
      }
    },
    //vue生命周期钩子
    created() {
      this.$store.dispatch('getCategorys');

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width:100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0 10px
        .shop_icon
          margin-left 5px
          color #999
          .shop_header_title
            color #999
            font-size 14px
            line-height 20px
</style>
