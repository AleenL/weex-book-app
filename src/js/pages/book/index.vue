<template>
    <div class="login_page">

        <image resize="stretch" :style="ScreenHeight" class="title-bg1"
               src="http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/home.png"></image>
        <div class="btnbox">
            <text class="btn btnlogin" @click="goLogin">登录</text>
            <text class="btn btnregister" @click="goRegist">即刻注册</text>
        </div>
    </div>
</template>

<style>
    .login_page {
        flex: 1;
        width: 750px;
        background-color: red;
    }

    .title-bg1 {
        width: 750px;
        position: fixed;
        top: 0px;
        left: 0px;
    }

    .btnbox {
        position: fixed;
        left: 0px;
        bottom: 115px;
        padding: 0px 76px;
        width: 750px;
    }

    .btn {
        flex: 1;
        height: 80px;
        line-height: 80px;
        border-radius: 8px;
        font-size: 26px;
        color: #FFFFFF;
        text-align: center;
        letter-spacing: 3px;
    }

    .btnlogin {
        border: 1px solid rgba(225, 225, 225, 0.7);
        background-color: rgba(255, 255, 255, 0.2);
    }

    .btnregister {
        margin-top: 30px;
        background-color: #00C4D1
    }
</style>

<script>
    import {WxcCell, WxcButton, WxcResult, WxcMinibar, Utils} from 'weex-ui'


    export default {
        components: {WxcCell, WxcButton, WxcResult, WxcMinibar},
        data() {
            return {
                curHomeBackTriggerTimes: 1,
                maxHomeBackTriggerTimes: 3,
            }
        },
        created() {
            this.ScreenHeight = {height: Utils.env.getScreenHeight() + 'px'}

        },
        methods: {
            wxcCellClicked() {
                this.isShow = true
            },
            goLogin() {
                this.$router.open({
                    name: 'login'
                })
            },
            goRegist() {
                this.$router.open({
                    name: 'regist'
                })
            },
            androidFinishApp() {
                const globalEvent = weex.requireModule('globalEvent')
                globalEvent.addEventListener('homeBack', options => {
                    (this.curHomeBackTriggerTimes === this.maxHomeBackTriggerTimes) && this.$router.finish()
                    this.curHomeBackTriggerTimes++
                    this.$notice.toast({message: `点击返回${this.maxHomeBackTriggerTimes}次之后，会关闭应用，当前点击第${this.curHomeBackTriggerTimes}次`})
                })
            }
        }
    }
</script>

