<template>
    <div class="wrapper">
        <div class="header-content">
            <div class="header">
                <div class="user-info">
                    <image class="user-avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527503697771&di=cec1838d35fb122cbddf6ec3a4c53a97&imgtype=0&src=http%3A%2F%2Fdiy.qqjay.com%2Fu2%2F2012%2F0913%2Fc699f5abfa965c340c6f3d8c826773e2.jpg"></image>
                    <div class="user-name-des-box">
                        <text class="user-name">李十一</text>
                        <text class="user-des">这个人很勤奋，但是还是什么也没有留下……</text>
                    </div>
                </div>
                <div><text> > </text></div>
            </div>
            <div class="jion-zone">
                <text class="mine-zone">还没有加入一个圈子呢？快去看看呗……</text>
                <div class="view-zone">
                    <text class="around-zone">逛一逛</text>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .wrapper{
        width: 750;
        background-color: #fff;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
    .header-content{
        width: 750px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        padding-bottom: 20px;
        box-shadow: 1px 1px 10px #ccc;
    }
    .header{
        padding-top:40px;
        width: 700px;
        height:240px;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #ccc;
    }
    .user-avatar{
        width: 140px;
        height: 140px;
    }
    .user-info{
        width:600px;
        height:140px;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
    }
    .user-name-des-box{
        width:460px;
        height:140px;
        align-content: space-between;
        margin-left: 30px;
    }
    .user-des{
        width:460px;
        height:40px;
        line-height: 40px;
        lines:1;
        text-overflow: ellipsis;
        color:#989898;
        font-size: 24px;
    }
    .user-name{
        width:460px;
        height:40px;
        line-height: 40px;
        lines:1;
        margin-bottom: 60px;
        text-overflow: ellipsis;
        color:#221;
        font-weight:700;
        font-size: 30px;
    }
    .jion-zone{
        width:750px;
        height:60px;
        padding-right: 25px;
        padding-left: 25px;

        background-color: #fff;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: row;
    }
    .mine-zone{
        width:450px;
        font-size: 24px;
        text-align: right;
        lines: 1;
        text-overflow: ellipsis;
        color: #00C4D1;
        text-align: left;
    }
    .view-zone{
        width:100px;
        height:40px;
        background-color: #00C4D1;
        border-radius: 5px;

    }
    .around-zone{
        font-size: 24px;
        color:#fff;
        line-height: 40px;
        text-align: center;
    }
</style>

<script>
    import util from '../utils/utils';
    import { userConfig }   from './config'

    export default{
        data() {
            return {
                items: userConfig,
            }
        }
    }
</script>
