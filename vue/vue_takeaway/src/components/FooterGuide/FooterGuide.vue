<template>
  <footer class="footer_guide border-1px">
    <div @click="goto('/msite')"  :class="{on:isCurrent('/msite')}" class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-waimaixinxi"/>
        </span>
      <span>首页</span>
    </div>
    <a @click="goto('/search')" :class="{on:isCurrent('/search')}" class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-sousuo"/>
        </span>
      <span>搜索</span>
    </a>
    <a @click="goto('/order')" :class="{on:isCurrent('/order')}" class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-dingdan"/>
        </span>
      <span>订单</span>
    </a>
    <a @click="goto('/profile')" :class="{on:isCurrent('/profile')}" class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-wodefill"/>
        </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      },
      isCurrent:function (path) {
        return this.$route.path===path
      }
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  //超过两级目录需要 /
  @import "../../common/stylus/mixins.styl"

  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex

    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color: #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
