<!--created by allen on 2018/05/29-->

<template>
  <div class="wrapper">
    <scroller @scroll="recylerScroll">
      <slider class="slider" interval="3000" auto-play="false" :index="0">
        <div class="frame" v-for="(img, idx) in dataList.bookInfo.bookImage" @click="bannerRouter(idx)">
          <image class="image" resize="cover" :src="img.src"></image>
        </div>
        <indicator class="indicator"></indicator>
      </slider>
    </scroller>
  </div>
</template>

<script>
  import {bookInfo} from '../services/shop'
  
  export default {
    data() {
      return {
        bookId: '',
        needSlider: true,
        supportSlide: true,
        isTabView: true,
        dataList: {
          bookInfo:{
            bookImage:[]
          }
        }
      }
    },
    created() {
    
      this.$router.getParams().then(params => {
        bookInfo({bookId: params.bookId}, (data) => {
          this.dataList = data.data
        }, (data) => {
          console.log('获取文章出错', data)
        })
      })
      
      this.$navigator.setLeftItem({
        textColor: '#aaa',                    // 文字颜色 (默认为白色)
        fontSize: '32',                         // 字号（默认32px）
        fontWeight: 'normal',                   // 是否加粗（默认不加粗）
      }, () => {
        // 点击回调
        this.$router.back()
      })
      
    }
  }
</script>

<style>
  
  .wrapper {
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
</style>
