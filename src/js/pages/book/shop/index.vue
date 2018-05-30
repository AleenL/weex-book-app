<template>
    <scroller>
        <div class="wrapper">
            <div class="header">
                <text class="bar-ic iconfont">&#xe694;</text>
                <div class="inputBox">
                    <input type="text" placeholder="十日谈" class="input" :autofocus=false value="" @change="onchange"
                           @input="oninput"/>
                </div>
                <text class="bar-ic iconfont">&#xe60f;</text>
            </div>
            <slider class="slider" interval="3000" auto-play="false" :index="0">
                <div class="frame" v-for="(img, idx) in imageList" @click="bannerRouter(idx)">
                    <image class="image" resize="cover" :src="img.src"></image>
                </div>
                <indicator class="indicator"></indicator>
            </slider>
            <div class="header-inter">
                <div class="header-inter-item" v-for="(img,index) in interList">
                    <image class="image-inter" resize="cover" :src="img.src"></image>
                    <text>{{img.title}}</text>
                </div>
            </div>
            <div class="content-style">
                <div class="content-style-item" v-for="(img, index) in contentList">
                    <text class="text-content">{{img.title}}</text>
                    <image class="image-content" resize="cover" :src="img.src"></image>
                </div>
            </div>
        </div>
    </scroller>
</template>

<style>
    .iconfont {
        font-family: iconfont;
    }

    .input {
        width: 540px;
        background-color: #fff;
        height: 50px;
        padding-left: 20px;
        border-radius: 2px;
        font-size: 26px;
    }

    .bar-ic {
        font-size: 42px;
        font-weight: 900;
        color: #fff;
        margin-right: 10px;
    }

    .header {
        background-color: #00C1D4;
        padding-top: 40px;
        padding-right: 25px;
        padding-left: 25px;
        width: 750px;
        height: 120px;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .image {
        width: 750px;
        height: 350px;
    }

    .slider {
        width: 750px;
        height: 350px;
    }

    .indicator {
        width: 750px;
        height: 100px;
        item-color: rgba(255, 255, 255, 0.2);
        item-selected-color: rgba(255, 255, 255, 0.4);
        item-size: 15px;
        position: absolute;
        top: 270px;
    }

    .header-inter {
        width: 750;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        background-color: #fff;
    }

    .header-inter-item {
        width: 250px;
        height: 300px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .image-inter {
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
    }

    .content-style {

        width: 750;

        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .content-style-item {
        margin-top: 10px;
        padding-top: 30px;
        padding-bottom: 20px;
        width: 370px;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .image-content {
        width: 100px;
        height: 150px;
    }

    .text-content {
        width: 250px;
        height: 50px;
        line-height: 50px;
        padding-left: 30px;
        border-left-color: #1086CE;
        border-left-style: solid;
        border-left-width: 12px;
    }
</style>

<script>
    import {WxcSearchbar} from 'weex-ui'

    export default {
        components: {WxcSearchbar},
        data: () => ({
            value: '',
            imageList: [
                {src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/shopBanner1.png'},
                {src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/shopBanner2.png'},
                {src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/shopBanner3.png'}
            ],
            interList: [
                {
                    src: "http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/center_content_1.png",
                    title: '我要借'
                }, {
                    src: "http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/center_content_2.png",
                    title: '淘笔记'
                }, {
                    src: "http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/center_content_3.png",
                    title: '开学季'
                }
            ],
            contentList: [
                {
                    src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/book1.png',
                    title: '心理学'
                }, {
                    src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/book2.png',
                    title: '大电影'
                }
            ]
        }),
        methods: {
            onchange(event) {
                console.log(event.value)
            },
            wxcSearchbarInputOnBlur() {
            },
            wxcSearchbarInputReturned() {
            },
            wxcSearchbarCloseClicked() {
            },
            wxcSearchbarInputOnInput(e) {
                this.value = e.value;
            },
            wxcSearchbarCancelClicked() {
            },
            wxcSearchbarInputDisabledClicked() {
            },
            wxcSearchbarDepChooseClicked() {
            }
        }
    };
</script>
