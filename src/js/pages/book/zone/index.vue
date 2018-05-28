<template>
    <scroller>
        <div class="title-photo">
            <image class="zone-header-title" src="http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/activity/zone-title.png"></image>
        </div>

            <div class="zone-info">
                <text class="zone-title">读书圈子</text>
                <text class="bar-ic iconfont" >&#xe633;</text>
            </div>
            <div class="city-info">
                <text class="city-title">你选择的城市 重庆</text>
                <text class="city-choose" >+</text>
            </div>
            <div class="border-shadow"></div>
            <div v-for="(v,index) in zoneData" :key="index" class="item-container">
                <div class="cell" :key="key" :accessible="true">
                    <wxc-pan-item  @wxcPanItemPan="wxcPanItemPan">
                        <wxc-item :picture="v.picture" :title="v.title" :des="v.des" :icon="v.﻿icon" :address="v.address" :people="v.people"/>
                    </wxc-pan-item>
                </div>
            </div>

    </scroller>

</template>

<style scoped>
    .iconfont {
        font-family: iconfont;
    }

    .title-photo{
        width:750px;
        height:230px;
        justify-content: flex-start;
        align-items: center;
        background-color: #fff;
    }
    .zone-header-title{
        width:700px;
        height:180px;
        margin-top: 50px;

    }
    .zone-info{
        width:750px;
        height:120px;
        flex-direction: row;
        justify-content: space-between;
        position: sticky;
        align-items: center;
        padding-left:30px;
        padding-right:30px;
        padding-top: 30px;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
        border-bottom-width: 1px;
        background-color: #fff;

    }
    .zone-title{
        font-size: 42px;
        font-weight: 900;
        color: #212121
    }
    .bar-ic{
        font-size: 42px;
        font-weight: 900;
        color: #919191;
        margin-right:10px;
    }
    .city-info{
        width:750px;
        height:80px;
        flex-direction: row;
        padding-left:30px;
        padding-right:30px;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        box-shadow: 1px 1px 20px #ccc;

    }
    .city-title{
        font-size: 24px;
        color: #00C4D1;
        font-weight: 300;
    }
    .city-choose{
        font-size: 28px;
        color: #00C4D1;
        font-weight: 900;
        margin-right: 10px;
    }
    .item-container{
        padding-bottom:90px;
        background-color: #fff;

    }
</style>

<script>
    import {WxcTabPage, WxcPanItem, Utils, BindEnv} from 'weex-ui';
    import WxcItem from './wxc-item.vue';
    import { zoneList } from '../services/article'
    export default{
        components: {WxcTabPage, WxcPanItem, WxcItem},
        data : () =>({
            user: {},
            city:'chongqing',
            zoneData:[{
                picture:'',
                title:'',
                des:'',
                icon:'',
                address:'',
                people:null
            }]
        }),
        created(){
            zoneList({city: this.city}, (data) => {
                this.zoneData = data.data
                console.log(data.data)
            }, (data) => {
                console.log('获取圈子出错', data)
            })
        },
        methods:{

        }
    }
</script>
