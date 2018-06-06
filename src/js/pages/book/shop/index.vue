<template>
  <scroller @scroll="recylerScroll">
    <div class="wrapper">
      <div class="header">
        <div class="header-search">
          <text class="bar-ic iconfont">&#xe694;</text>
          <div class="inputBox">
            <input type="text" :placeholder="padding" class="input" :autofocus=false value="" @change="onchange"
                   @input="oninput"/>
          </div>
          <text class="bar-ic iconfont">&#xe60f;</text>
        </div>
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
      <div :class="[contentOffset <= -920 ? 'fixed' : 'shop-title']">
        <wxc-tab-page class="top-list" ref="wxc-tab-page" :tab-titles="tabTitles" :tab-styles="tabStyles"
                      title-type="text"
                      :needSlider="needSlider" :is-tab-view="isTabView" :tab-page-height="90" :spm-c="4307989"
                      @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected"
        >
        </wxc-tab-page>
      </div>
      <div @click="goBook(index)" v-for="(v,index) in dataList" :key="index" class="item-container">
        <div class="cell" :key="key" :accessible="true">
          <wxc-pan-item @wxcPanItemPan="wxcPanItemPan">
            <wxc-item :nickName="v.bookBelong.nickName" :icon="v.bookBelong.zoneIcon"
                      :bookName="v.bookInfo.bookName"
                      :time='v.logTime'
                      :bookId="v.bookId"
                      :sell="v.price" :want="v.want" :price="v.price" :des="v.des"
                      :bookImage="v.bookInfo.bookImage" :address="v.bookBelong.address"
                      :avatar="v.bookBelong.avatar"/>
          </wxc-pan-item>
        </div>
      </div>
      <div class="dialog" v-if="isShow">
        <wxc-loading :show="isShow"></wxc-loading>
      </div>
    
    </div>
  </scroller>
</template>

<style>
  .iconfont {
    font-family: iconfont;
  }
  
  .shop-title {
    margin-bottom: 10px;
    height: 90px;
    position: sticky
  }
  
  .fixed {
    padding-top: 140px;
    margin-bottom: 10px;
  }
  
  .show {
    height: 90px;
    margin-bottom: 10px;
  }
  
  .wrapper {
    padding-bottom: 90px;
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
    width: 750px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
  }
  
  .header-search {
    width: 750px;
    padding-right: 25px;
    padding-left: 25px;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  
  .image {
    width: 750px;
    height: 350px;
  }
  
  .slider {
    margin-top: 140px;
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
    width: 150px;
    height: 150px;
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
    margin-bottom: 10px;
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
  
  .dialog {
    flex: 1;
    width: 750px;
    position: fixed;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

</style>

<script>
  const dom = weex.requireModule('dom');
  import {WxcTabPage, WxcPanItem, Utils, BindEnv, WxcSearchbar, WxcLoading, WxcPartLoading} from 'weex-ui';
  import {bookList} from '../services/shop'
  import WxcItem from './wxc-item.vue';
  import Config from './config'
  
  export default {
    components: {WxcSearchbar, WxcTabPage, WxcPanItem, WxcItem, WxcLoading, WxcPartLoading},
    data: () => ({
      value: '',
      imageList: [
        {src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/shopBanner1.png'},
        {src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/shopBanner2.png'},
        {src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/shopBanner3.png'}
      ],
      tabList: ['hot', 'now'],
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles,
      isTabView: true,
      needSlider: true,
      tabPageHeight: 0,
      contentOffset: 0,
      isShow: false,
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
      ],
      dataList: []
    }),
    created() {
      bookList({style: 'hot'}, (data) => {
        this.dataList = data.data
        console.log(data.data.time)
      }, (data) => {
        console.log('获取文章出错', data)
      })
    },
    methods: {
      recylerScroll: function (e) {
        this.contentOffset = e.contentOffset.y
      },
      onchange(event) {
        console.log(event.value)
      },
      wxcTabPageCurrentTabSelected(event) {
        this.isShow = true
        const self = this;
        const style = (this.tabList[event.page])
        bookList({style: style}, (data) => {
          self.dataList = data.data
          setTimeout(() => {
            self.isShow = false
          }, 1000)
        }, (data) => {
          console.log('获取文章出错', data)
        })
      },
      wxcPanItemPan(e) {
        if (BindEnv.supportsEBForAndroid()) {
          this.$refs['wxc-tab-page'].bindExp(e.element);
        }
      },
      goBook(index){
      
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
