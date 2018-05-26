<template>

    <div>
        <div class="wrapper">
            <text class="title">登录与书</text>
            <div class="cellbox">
                <wxc-cell title="输入用户名" class="user-name cell"
                          :cell-style="cellStyleObj"
                          :has-arrow="false"
                          :has-top-border="false"
                          :has-bottom-border="false"
                >
                    <input placeholder="请输入用户名" class="inputs" type="text" v-model='userName'/>
                </wxc-cell>
                <wxc-cell title="输入密码" class="cell"
                          :cell-style="cellStyleObj"
                          :has-arrow="false"
                          :has-top-border="false"
                          :has-bottom-border="false"
                >
                    <input placeholder="请输入密码" class="inputs" type="password" v-model='spwd'/>
                </wxc-cell>
            </div>

            <div class="btnbox">
                <text class="btn" @click="goInfo">登录</text>
            </div>
        </div>
    </div>
</template>
<style scoped >
    .wrapper{
        flex: 1;
        background-color: #ffffff;
    }
    .title{
        font-size:44px;
        color:rgba(18,28,50,1);
        line-height:150px;
        margin-bottom: 60px;
        text-align: center;
    }
    .cellbox{
        padding-left: 32px;
        box-sizing: border-box;
    }
    .cell{
        padding-left: 0px !important;
        border-bottom-style: solid;
        border-bottom-color: #ececec;
        border-bottom-width: 1px;

    }
    .inputs{
        flex: 1;
        text-align: right;
        width: 600px;
        height: 70px;
        line-height: 70px;
        outline: none;
        font-size:28px;
    }
    .btnbox{
        padding: 0px 32px;
        margin-top: 150px;
        height: 80px;
    }
    .btn{
        background-color: #FF6F6F;
        height: 80px;
        line-height: 80px;
        border-radius: 8px ;
        font-size: 26px;  color: #FFFFFF;  letter-spacing: 3px;text-align: center;
    }

</style>
<script>
    import { WxcButton, WxcResult, WxcMinibar, WxcCell } from 'weex-ui'
    import { loginSeller } from '../services/login'

    export default {
        components: { WxcButton, WxcResult, WxcMinibar, WxcCell },
        data () {
            return {
                userName: '',
                spwd: '',
                cellStyleObj:{paddingLeft:'0',height:'100px',paddingRight: '32px'}

            }
        },
        created () {
            //设置导航条中间区域
            this.$navigator.setCenterItem({
                text: '',                  // 展示的文字 (和图片 二选一)
                textColor: '#666',                      // 文字颜色 (默认为白色)
                fontSize: '26',                         // 字号（默认32px）
                fontWeight: 'normal',                   // 是否加粗（默认不加粗）
            }, () => {
                // 点击回调
            })
            this.$router.getParams().then(params => {
                console.log(params)
                this.phone = params.mobile
            })
        },

        methods: {
            wxcCellClicked () {
                this.isShow = true

            },
            goInfo () {

                if (!this.spwd) {
                    this.$notice.toast({
                        message: '请填写密码!',
                        duration: 1
                    })
                    return false
                }
                if(!this.userName) {
                	this.$notice.toast({
                		message: '请填写用户!',
                		duration: 1
                	})
                	return false
                }

                loginSeller({username: this.userName, password: this.spwd}, (data) => {
                    console.log('datad的内容是：',data)
                    this.$notice.toast({
                        message: '登录成功！',
                        duration: 1
                    })
                    this.$router.setHomePage('/pages/book/main.js')
                    setTimeout(() => {
                        this.$router.open({
                            name: 'main'
                        })
                    }, 1000)
                }, (data) => {
                    this.$notice.toast({
                        message: data.data,
                        duration: 1
                    })
                })
            }
        }
    }
</script>
