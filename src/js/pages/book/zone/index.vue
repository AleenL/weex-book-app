<template>
    <div class="flex-fluid">
        <image class="zone-header-title" src="http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/activity/zone-title.png"></image>
        <div class="zone-info">
            <text class="zone-title">读书圈子</text>
            <text class="bar-ic iconfont" >&#xe633;</text>
        </div>
        <div class="city-info">
            <text class="city-title">你选择的城市 重庆</text>
            <text class="city-choose" >+</text>
        </div>
    </div>
    <div v-for="(v,index) in dataList" :key="index" class="item-container">
        <div class="cell" :key="key" :accessible="true">
            <wxc-pan-item  @wxcPanItemPan="wxcPanItemPan">
                <wxc-item :image="v.picture" :title="v.title" :des="v.des" :icon="v.﻿icon" :address="v.address"/>
            </wxc-pan-item>
        </div>
    </div>
</template>

<style>
    .iconfont {
        font-family: iconfont;
    }

    .flex-fluid{
        width:750px;
        justify-content: flex-start;
        align-items: center;
        height:430px;
        background-color: #fff;
        box-shadow: 2px 2px 10px #ccc;
    }
    .zone-header-title{
        width:700px;
        height:180px;
        margin-top: 50px;
    }
    .zone-info{
        width:680px;
        height:120px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
        border-bottom-width: 1px;
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
        width:680px;
        height:80px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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
</style>

<script>
    import WxcItem from './wxc-item.vue';

</script>
