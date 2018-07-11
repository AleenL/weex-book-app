<template>
  <div>
    <navigation-bar title="文章"></navigation-bar>
    <scroller class='wrapper'>
      <wex-refresh @loadingDown='console'></wex-refresh>
      <div class="frame">
        <image class="image" resize="cover" :src="data.first_jpg"></image>
      </div>
      <div>
        <text class='airTitle'>{{data.title}}</text>
      </div>
      <div class='airInfo'>
        <image :src="data.avatar" resize='cover' class="avatar"></image>
        <div class='border-left'></div>
        <text class='airAnther'>by {{data.anther}}</text>
      </div>
      <div class='airContent' v-for="text in data.content">
        <text class='aircontent' v-if="text[1] == 'text'">{{text[0]}}</text>
        <text class='Title' v-if="text[1] == 'title'">{{text[0]}}</text>
        <image v-if="text[1] == 'photo'" class="image airImage" resize="cover" :src="text[0]"></image>
      </div>
    </scroller>
  </div>

</template>

<style>
  .wrapper {
    width: 750px;
    background-color: #fff;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }
  
  .airContent {
    justify-content: center;
    align-items: center;
  }
  
  .aircontent {
    width: 680px;
    padding-top: 20px;
    padding-bottom: 20px;
    letter-spacing: 1.5;
    font-size: 26px;
    color: #575656;
    line-height: 36px;
  }
  
  .airImage {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  
  .Title {
    text-align: left;
    letter-spacing: 1.5;
    font-size: 30px;
    width: 680px;
    font-weight: 900;
    color: #575656;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  
  .frame {
    width: 750px;
    height: 400px;
  }
  
  .image {
    width: 750px;
    height: 400px;
  }
  
  .airTitle {
    font-size: 36px;
    color: #222;
    text-align: center;
    margin-top: 20px;
    padding-left: 40px;
    padding-right: 40px;
    font-weight: 900;
  }
  
  .airInfo {
    width: 300px;
    height: 120px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  
  .airAnther {
    font-size: 26px;
    color: #5F5E5E;
  }
  
  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 70px;
  }
  
  .border-left {
    border-right-color: #ccc;
    opacity: .2;
    border-width: 2px;
    border-style: solid;
    height: 40px;
    margin-right: 30px;
    margin-left: 30px;
  }
</style>

<script>
  import {bannerArt} from '../services/article'
  import navigationBar from '../common/navigationBar'
  
  export default {
    data() {
      return {
        data: {
          title: '',
          anther: '',
          avatar: '',
          first_jpg: '',
          content: [],
          commentText: [],
          goodList: []
        }
      }
    },
    components: {
      WexRefresh: require('../common/refresh'),
      'navigation-bar': navigationBar
    },
    beforeCreate() {
      this.$router.getParams().then((params) => {
        bannerArt({index: params.artIndex}, (data) => {
          this.data = data.data
        }, (data) => {
          console.log('获取文章出错', data)
        })
      })
    },
    created() {
    
    },
    methods: {
      console() {
        console.log(1)
      }
    }
  }
</script>
