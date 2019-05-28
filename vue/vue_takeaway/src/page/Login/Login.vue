<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="loginWay?'on':undefined" @click="loginWay=!loginWay">短信登录</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=!loginWay">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on:loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button class="get_verification" :class="{right_phone:rightPhone}" @click.prevent="getCode">
                {{computeTime>0?`${computeTime}s`:`获取验证码`}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" placeholder="密码" v-else v-model="pwd">
                <div class="switch_button" :class="{on:showPwd,off:!showPwd}" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right:showPwd}"></div>
                  <span class="switch_text" v-if="!showPwd">...</span>
                  <span class="switch_text" v-else>abc</span>
                </div>
              </section>
              <section class="login_message">
                <!--注册ref下面可以$ref引用这个标签-->
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha"
                     v-on:click="newCaptcha()" ref="captcha">
              </section>
            </section>
          </div>
          <button type="submit" class="login_submit">登录</button>
          <!--<button v-on:click="openTip('123414')">asdfadf</button>-->
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-jiantou2"></i>
          </span>
    </div>

    <!--<AlertTip alert-text="alertText"></AlertTip>-->
    <!--没有冒号表示直接传值-->
    <AlertTip :alert-text="alertText" v-show="alertShow" @closeTip="closeTip"></AlertTip>
  </div>
</template>

<script>
  import AlertTip from "../../components/AlertTip/AlertTip";
  import {reqPwdLogin, reqSendCode, reqSmsLogin} from "../../api";

  export default {
    name: "Login",
    data() {
      return {
        loginWay: true, // true代表短信登陆, false代表密码
        computeTime: 0, // 计时的时间
        showPwd: false, // 是否显示密码
        phone: '', // 手机号
        code: '', // 短信验证码
        name: '', // 用户名
        pwd: '', // 密码
        captcha: '', // 图形验证码
        alertText: '', // 提示文本
        alertShow: false, // 是否显示警告框
      }
    },
    computed: {
      rightPhone() {
        return /^1\d{10}/.test(this.phone)
      }
    },
    components: {AlertTip},
    methods: {
      openTip: function (msg) {
        this.alertShow = true;
        this.alertText = msg
      },
      closeTip: function () {
        this.alertShow = false;
        this.alertText = ''
      },
      newCaptcha() {
        this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
      },
      async getCode() {
        if (!this.computeTime) {
          this.computeTime = 30;
          let interval = setInterval(() => {
            this.computeTime--;
            if (this.computeTime <= 0) {
              clearInterval(interval);
              this.computeTime = 0;
            }
          }, 1000)
        }
        let res = await reqSendCode(this.phone);
        if (res.code === 1) {
          this.openTip(res.msg);
          this.computeTime = 0;
        }
      },
      async login() {
        let res;
        if (this.loginWay) {
          const {phone, rightPhone, code} = this;
          if (!rightPhone) {
            this.openTip('手机号不正确')
            return
          }
          else if (!/\d{6}/.test(code)) {
            // 验证必须是6位数字
            this.openTip('验证必须是6位数字');
            return
          }
          else
            res = await reqSmsLogin(phone, code);
        } else {
          const {name, pwd, captcha} = this
          if (!this.name) {
            // 用户名必须指定
            this.openTip('用户名必须指定')
            return
          } else if (!this.pwd) {
            // 密码必须指定
            this.openTip('密码必须指定')
            return
          } else if (!this.captcha) {
            // 验证码必须指定
            this.openTip('验证码必须指定')
            return
          }
          // 发送ajax请求密码登陆
          res = await reqPwdLogin(name, pwd, captcha)
        }

        console.log(res)
        //登陆成功
        if (res.code === 0) {
          //保存userInfo
          const uif = res.data;
          this.$store.dispatch('recordUserInfo', uif);
          this.$router.replace('/profile')
        } else {
          this.newCaptcha();
          this.openTip(res.msg)
        }
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff

    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto

      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center

        .login_header_title
          padding-top 40px
          text-align center

          > a
            color #333
            font-size 14px
            padding-bottom 4px

            &:first-child
              margin-right 40px

            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774

      .login_content
        > form
          > div
            display none

            &.on
              display block

            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial

              &:focus
                border 1px solid #02a774

            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff

              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent

                &.right_phone
                  color black

            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff

              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s, border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)

                &.off
                  background #fff

                  .switch_text
                    float right
                    color #ddd

                &.on
                  background #02a774

                > .switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
                  transition transform .3s

                  &.right
                    transform translateX(30px)

            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px

              > a
                color #02a774

          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0

        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999

      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px

        > .iconfont
          font-size 20px
          color #999
</style>
