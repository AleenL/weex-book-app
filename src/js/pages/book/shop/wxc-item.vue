<!--created by allen on 2018/05/29-->

<template>
  <div class="wxc-item" @click="goBook">
    <div class="book-belong-info">
      <image :src="avatar" class="avatar"></image>
      <div class="book-belong-name">
        <div class="belong-name">
          <text class="nickname">{{nickName}}</text>
          <image class="icon" :src="icon"></image>
        </div>
        <text class="book-name">《{{bookName}}》</text>
      </div>
      <div class="cost">
        <text class="money-icon">￥</text>
        <text class="cost-money">{{(price / 1000).toFixed(1)}}元/周</text>
      </div>
    </div>
    <div class="bookImage-container">
      <div class="book-list">
        <div v-for="(item, index) in bookImage" :key="index" class="item-container" @click="openLightBox(index)">
          <image :src="item.src" class="image-item"></image>
        </div>
      </div>
      <wxc-lightbox
              ref="wxc-lightbox"
              height="800"
              :show="show"
              :image-list="imageList"
              @wxcLightboxOverlayClicked="wxcLightboxOverlayClicked">
      </wxc-lightbox>
    </div>
    <div class="des-box">
      <text class="book-des">{{des}}</text>
    </div>
    <div class="bottom-text">
      <text class="address">{{getTimeNumber(time)}}</text>
      <text class="want">{{bookId}} 人想借</text>
    </div>
  </div>
</template>

<style scoped>
  .wxc-item {
    width: 750px;
    height: 540px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 10px;
    background-color: #fff;
  }
  
  .book-belong-info {
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    height: 120px;
  }
  
  .book-belong-name {
    width: 400px;
    margin-left: 20px;
    
  }
  
  .belong-name {
    width: 400px;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
  
  .book-name {
    width: 400px;
    lines: 1;
    text-overflow: ellipsis;
    font-size: 30px;
    margin-top: 20px;
  }
  
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
  
  .icon {
    margin-left: 12px;
    width: 35px;
    height: 35px;
  }
  
  .nickname {
    max-width: 350px;
    lines: 1;
    font-size: 28px;
    text-overflow: ellipsis;
  }
  
  .cost {
    
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  
  .money-icon {
    font-size: 26px;
    color: #FF4C42
  }
  
  .cost-money {
    font-size: 32px;
    color: #FF4C42;
    font-weight: 700;
  }
  
  .book-list {
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
  
  .item-container {
    width: 150px;
    height: 180px;
    margin-right: 6px;
  }
  
  .image-item {
    width: 150px;
    height: 180px;
  }
  
  .book-des {
    margin-top: 10px;
    height: 100px;
    font-size: 28px;
    line-height: 40px;
    lines: 2;
    text-overflow: ellipsis;
    font-weight: 700;
    
  }
  
  .des-box {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
  }
  
  .bottom-text {
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
  }
  
  .address {
    font-size: 28px;
    color: #00C1D4;
  }
  
  .want {
    font-size: 28px;
    color: #a1a1a1;
  }
</style>

<script>
  const expressionBinding = weex.requireModule('expressionBinding');
  import {WxcRichText, WxcSpecialRichText, Utils, WxcLightbox} from 'weex-ui';
  import {getTime} from '../data'
  
  export default {
    components: {WxcRichText, WxcSpecialRichText, WxcLightbox},
    props: {
      avatar: {
        type: [String, Array],
        default: ''
      },
      nickName: {
        type: String,
        default: ''
      },
      sell: {
        type: String,
        default: ''
      },
      address: {
        type: String,
        default: ""
      },
      bookImage: {
        type: Array,
        default: []
      },
      des: {
        type: [String, Number],
        default: ""
      },
      icon: {
        type: String,
        default: ''
      },
      bookName: {
        type: String,
        default: ''
      },
      want: {
        type: [String, Number],
        default: ''
      },
      price: {
        type: Number,
        default: 0
      },
      time: {
        type: String,
        default: 0
      },
      bookId: {
        type: Number,
        default: 0
      }
    },
    data: () => ({
      yenSymbol: '\u00A5',
      show: false,
      imageList: [],
      createTime: ''
    }),
    created() {
    
    },
    computed: {
      isTitleString() {
        return Utils.isString(this.title);
      }
    },
    methods: {
      goBook() {
        this.$router.open({
          name:'bookInfo',
          params:{bookId:this.bookId}
        })
      },
      getTimeNumber(time) {
        let timeNumber = new Date(this.time).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
        let timeStrap = timeNumber.replace(/-/g, '/');
        return getTime(new Date(timeStrap).getTime())
      },
      openLightBox(index) {
        let imageSrc = this.bookImage[index];
        let imageList = this.bookImage.concat()
        imageList.splice(index, 1)
        imageList.unshift(imageSrc)
        this.imageList = imageList
        this.show = true;
      },
      wxcLightboxOverlayClicked() {
        // 无状态组件，需要在此次关闭
        this.show = false;
      }
    }
  };
</script>
