<template>
  <div id="app">
<!--这应该是路由页 -->
    <router-view/>
    <FooterGuide v-show="$router.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide';
export default {
  name: 'App',
  components:{FooterGuide}
}
</script>

<style rel="stylesheet/stylus" lang="stylus" >
 #app
  width 100%
  height 100%
   background:#f5f5f5;
</style>
