<!--created by allen on 2018/05/29-->

<template>
  <div class="wrapper">
    <navigation-bar title="书本详情"></navigation-bar>
    <scroller @scroll="recylerScroll">
      <slider class="slider" interval="3000" auto-play="false" :index="0">
        <div class="frame" v-for="(img, idx) in dataList.bookInfo.bookImage" @click="bannerRouter(img.src)">
          <image class="image" resize="cover" :src="img.src"></image>
        </div>
        <indicator class="indicator"></indicator>
      </slider>
      <wxc-mask height="800"
                width="702"
                border-radius="0"
                duration="200"
                :has-animation="hasAnimation"
                :has-overlay="true"
                :show="isBottomShow"
                @wxcMaskSetHidden="wxcMaskSetHidden">
        <div class="content">
          <image resize="cover" class="mask-image" :src="imageSrc"></image>
        </div>
      </wxc-mask>
      <div class="book-price">
        <div class="book-amount">
          <div class="book-sell">
            <text class="price-icon">￥</text>
            <text class="price-number">{{dataList.price / 1000}}元</text>
            <text class="price-week">/周</text>
          </div>
          <text class="bettwen" v-if="dataList.sell.indexOf('selt')>-1">|</text>
          <div class="book-selt" v-if="dataList.sell.indexOf('selt')>-1">
            <text class="price-icon">￥</text>
            <text class="price-number">{{dataList.price / 1000}}元</text>
          </div>
        </div>
        <div>
          <text class="icon sellStyle">&#xe616;</text>
        </div>
      </div>
      <div class="book-name">
        <text class="book-name-title">《{{dataList.bookInfo.bookName}}》</text>
        <div class="book-like">
          <text class="book-like-number">{{dataList.want}}</text>
          <text class="book-like-icon icon">&#xe635;</text>
        </div>
      </div>
      <text class="book-des">{{dataList.des}}</text>
      <div class="book-owner">
        <div class="book-owner-content">
          <image class="owenr-avatar" :src="dataList.bookBelong.avatar"></image>
          <div class="owner-info">
            <div class="owner-title">
              <div class="owner-header">
                <text class="owner-name">{{dataList.bookBelong.nickName}}</text>
                <image class="zone-icon" v-if="dataList.bookBelong.zoneIcon"
                       :src="dataList.bookBelong.zoneIcon"></image>
              </div>
            </div>
            <text class="owner-address">{{dataList.bookBelong.address}}</text>
            <text class="owner-des">我在{{dataList.bookBelong.zoneName}}圈子，快找我来玩啊……</text>
          </div>
        </div>
        <div class="zone-icon-btn">
          <text class="icon-btn">Ta的圈子</text>
        </div>
      </div>
      <div class="book-info">
        <div class="book-cell-item">
          <text class="book-info-title">姓名</text>
          <text class="book-info-des">{{dataList.bookInfo.bookWrite}}</text>
        </div>
        <div class="book-cell-item">
          <text class="book-info-title">出版社</text>
          <text class="book-info-des">{{dataList.bookInfo.bookPress}}</text>
        </div>
        <div class="book-cell-item">
          <text class="book-info-title">分类</text>
          <text class="book-style" v-for="item in dataList.bookInfo.bookStyle">{{item}}</text>
        </div>
      </div>
      <text class="book-commonds-header">留言({{dataList.bookMessage.length}})</text>
      <div class="book-commonds">
        <div class="book-commonds-item" v-for="(item,index) in dataList.bookMessage">
          <image class="commond-avatar" :src="item.avatar"></image>
          <div class="commond-text">
            <text class="commond-text-nickname">{{item.nickName}}</text>
            <text class="commond-text-title">{{item.word}}</text>
            <text class="commond-text-time">{{getTimeNumber(item.time)}}</text>
          </div>
        </div>
      </div>
    </scroller>
    <div class="bottom-tab">
      <div class="bottom-tab-item">
        <text>下单</text>
      </div>
      <div class="bottom-tab-item">
        <text>留言</text>
      </div>
      <div class="bottom-tab-item">
        <text>想借</text>
      </div>
    </div>
  </div>
</template>

<script>
  import {bookInfo} from '../services/shop'
  import NavigationBar from '../common/navigationBar.vue'
  import {WxcMask} from 'weex-ui'
  import {getTime} from '../data'
  
  export default {
    components: {
      WxcMask,
      'navigation-bar': NavigationBar
    },
    data() {
      return {
        bookId: '',
        needSlider: true,
        supportSlide: true,
        isTabView: true,
        isBottomShow: false,
        imageSrc: '',
        dataList: {
          bookInfo: {
            bookImage: []
          }
        }
      }
    },
    created() {
      this.dataList = {
        "_id": "5b0cb05ce17709b91d999104",
        "bookId": 0,
        "price": 6000,
        "style": "散文",
        "sell": ["sell", "selt"],
        "logTime": "2018-05-29T04:03:22.274Z",
        "want": 42,
        "des": "新华书店里面买的浮生六记，有些地方做了批注，有些地方有错别字，我拿铅笔也改了，希望借书的人能好好爱惜，可以借也可以转让",
        "bookBelong": {
          "nickName": "kaerd咖啡馆",
          "bookNumber": 1123,
          "zoneIcon": "http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/activity/zone-icon1.png",
          "zoneName": "克苏鲁跑团",
          "avatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527066331189&di=cb02028e2f306eb69d8f8f628293f149&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201507%2F09%2F20150709200521_nYZMX.thumb.700_0.jpeg",
          "address": "渝中区两路口血液中心"
        },
        "bookInfo": {
          "bookName": "浮生六记",
          "bookImage": [{"src": "http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/book_32_title1.png"}, {"src": "http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/book_32_title2.png"}, {"src": "http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner/book_32_title3.png"}],
          "bookWrite": "严复",
          "bookPress": "重庆科技大学出版社",
          "bookStyle": ["散文", "中国", "杂谈"]
        },
        "bookMessage": [{
          "nickName": "整个重庆老子最乖",
          "word": "请问是2015年夏天出版的那一版吗？科普一下，那一版的很顾问翻译质量很好",
          "time": "1531188648180",
          "avatar": ""
        }, {"nickName": "李四", "word": "很想要，请问可以快递吗？包邮可以不？", "time": "1531188628180", "avatar": ""}]
      }
//      this.$router.getParams().then(params => {
//        bookInfo({bookId: params.bookId}, (data) => {
//          this.dataList = data.data
//          console.log(data.data)
//        }, (data) => {
//          console.log('获取文章出错', data)
//        })
//      })
      
      this.$navigator.setLeftItem({
        textColor: '#aaa',                    // 文字颜色 (默认为白色)
        fontSize: '32',                         // 字号（默认32px）
        fontWeight: 'normal',                   // 是否加粗（默认不加粗）
      }, () => {
        // 点击回调
        this.$router.back()
      })
      
    },
    
    methods: {
      bannerRouter(src) {
        this.isBottomShow = true
        this.imageSrc = src
      },
      wxcMaskSetHidden() {
        this.isBottomShow = false
      },
      getTimeNumber(time) {
//        let timeNumber = new Date(time).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
//        let timeStrap = timeNumber.replace(/-/g, '/');
        return getTime(time)
      },
    }
  }
</script>

<style>
  
  .icon {
    font-family: iconfont;
  }
  
  .wrapper {
    /*padding-bottom: 90px;*/
    flex: 1;
    background-color: #fff;
    padding-bottom: 90px;
  }
  
  .image {
    width: 500px;
    height: 500px;
    
  }
  
  .slider {
    width: 750px;
    height: 600px;
    background-color: #fff;
    box-shadow: 1px 1px 10px #999;
  }
  
  .frame {
    width: 750px;
    height: 600px;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  
  .indicator {
    width: 750px;
    height: 100px;
    item-color: rgba(0, 0, 0, 0.2);
    item-selected-color: rgba(0, 0, 0, 0.4);
    item-size: 20px;
    position: absolute;
    top: 500px;
  }
  
  .mask-image {
    width: 702px;
    height: 800px;
  }
  
  .book-price {
    padding-right: 40px;
    padding-left: 40px;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  
  .book-amount {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 240px;
  }
  
  .bettwen {
    color: #FF4C42;
  }
  
  .book-sell, .book-selt {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 120px;
  }
  
  .book-selt {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 80px;
  }
  
  .price-icon {
    font-size: 26px;
    color: #FF4C42;
    font-weight: 900;
  }
  
  .price-number {
    font-size: 34px;
    font-weight: 900;
    color: #FF4C42;
  }
  
  .price-week {
    font-size: 26px;
    font-weight: 900;
    color: #FF4C42;
  }
  
  .book-name {
    margin-top: 30px;
    padding-left: 40px;
    padding-right: 40px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  
  .book-name-title {
    font-size: 36px;
    font-weight: 700;
    color: #233
  }
  
  .book-like {
    width: 90px;
    justify-content: space-around;
    align-items: flex-end;
    flex-direction: row;
  }
  
  .book-like-number {
    font-size: 26px;
    color: #00BDCC;
  }
  
  .book-like-icon {
    font-size: 40px;
    color: #00BDCC;
  }
  
  .book-des {
    padding-right: 40px;
    padding-left: 40px;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: 700;
  }
  
  .book-owner-content {
    padding-right: 40px;
    padding-left: 40px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
  
  .book-owner {
    border-bottom-style: solid;
    border-bottom-width: 8px;
    border-bottom-color: #eee;
    border-top-style: solid;
    border-top-width: 8px;
    border-top-color: #eee;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  
  .owner-info {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 30px;
  }
  
  .owenr-avatar {
    width: 120px;
    height: 120px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  .owner-title {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  
  .owner-header {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-bottom: 15px;
  }
  
  .zone-icon {
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }
  
  .owner-name {
    font-size: 32px;
    color: #484A4D
  }
  
  .owner-address {
    color: #00B5C7;
    font-size: 26px;
    padding-bottom: 15px;
  }
  
  .owner-des {
    color: #515151;
    font-size: 26px;
  }
  
  .icon-btn {
    width: 120px;
    margin-top: 10px;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #00B5C7;
    font-size: 24px;
    color: #fff;
    border-radius: 5px;
    margin-left: 580px;
  }
  
  .book-info {
    padding-right: 40px;
    padding-left: 40px;
    border-bottom-color: #eee;
    border-bottom-width: 8px;
    border-bottom-style: solid;
  }
  
  .book-cell-item {
    justify-content: flex-start;
    align-items: center;
    height: 90px;
    flex-direction: row;
    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-bottom-color: #eee;
  }
  
  .book-info-title {
    width: 120px;
    color: #bbb;
    font-size: 28px;
  }
  
  .book-info-des {
    color: #1E1E1E;
    font-size: 28px;
  }
  
  .book-style {
    font-size: 28px;
    background-color: #00B5C7;
    color: #fff;
    padding-left: 6px;
    padding-right: 6px;
    padding-bottom: 2px;
    padding-top: 2px;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  .book-commonds {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 40px;
    padding-left: 40px;
  }
  
  .commond-avatar {
    width: 120px;
    height: 120px;
    border-radius: 5px;
  }
  
  .book-commonds-item {
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    height: 150px;
  }
  
  .commond-text-nickname {
    font-size: 28px;
    color: #1E1E1E;
    padding-bottom: 10px;
  }
  
  .commond-text-title {
    font-size: 26px;
    color: #999999;
    width: 550px;
    lines: 2;
    text-overflow: ellipsis;
    padding-bottom: 10px;
  }
  
  .commond-text-time {
    font-size: 26px;
    color: #00B5C7;
    width: 550px;
  }
  
  .book-commonds-header {
    height: 100px;
    padding-left: 40px;
    line-height: 90px;
    border-bottom-style: solid;
    border-bottom-width: 6px;
    border-bottom-color: #eee;
  }
  
  .bottom-tab {
    height: 90px;
    width: 750px;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
  
  .bottom-tab-item{
    width:100px;
  }
  
  .sellStyle {
    font-size: 80px;
    color: #00B5C7;
    line-height: 50px;
  }
</style>
