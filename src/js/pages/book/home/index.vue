
<template>
    <div class='wrapper'>
      
        <scroller @scroll="recylerScroll">
            <slider class="slider" interval="3000" auto-play="false" :index="0">
                <div class="frame" v-for="(img, idx) in imageList" @click="bannerRouter(idx)">
                    <image class="image" resize="cover" :src="img.src"></image>
                </div>
                <indicator class="indicator"></indicator>
            </slider>
<div class='aa'>
  <div class='title'><text class='titleText'  :style="{height:contentOffset+'px'}">与书</text></div>
<wxc-tab-page ref="wxc-tab-page"  :tab-titles="tabTitles" :tab-styles="tabStyles" title-type="text" :needSlider="needSlider" :is-tab-view="isTabView" :tab-page-height="110" :spm-c="4307989" @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
            </wxc-tab-page>  
</div>
            

            <div v-for="(v,index) in tabList" :key="index" class="item-container">
                <div v-for="(demo,key) in v" class="cell" :key="key" :accessible="true" aria-label="卡片测试｜出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游,价格219元">
                    <wxc-pan-item url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675" @wxcPanItemPan="wxcPanItemPan">
                        <wxc-item image="https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg" :image-text="tabTitles[index].title" title="卡片测试｜出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游" :desc="desc" :tags="tags" price="666" price-desc="月售58笔｜999+条评论" />
                    </wxc-pan-item>
                </div>
            </div>
        </scroller>
    </div>
</template>
<style scoped>

.aa{
  position: sticky;
}
.title{
  overflow:hidden; 
  width: 750;
  background-color: rgb(255,255,255);
  border-bottom-width: 1px;
  border-style: solid;
  border-color:#112211
  
}
.titleText{
  line-height:120px;
  color: #112211;
  text-align: center;
}
.wrapper{
  padding-bottom: 90px;
}


.wxc-item:last-child{
    padding-bottom: 40px;
  }

.item-container {
    width: 750px;
    background-color: #fff;
}

.border-cell {
    background-color: #f2f3f4;
    width: 750px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
}

.cell {
    background-color: #ffffff;
}

.image {
    width: 750px;
    height: 450px;
}

.slider {
    width: 750px;
    height: 450px;
}

.frame {
    width: 700px;
    height: 450px;
    position: relative;
}

.login_page {
    flex: 1;
    width: 750;
    background-color: #fff;
}

.title-bg1 {
    width: 750px;
    height: 450px;
}

.indicator {
    width: 750px;
    height: 100px;
    item-color: rgba(255, 255, 255, 0.2);
    item-selected-color: rgba(255, 255, 255, 0.4);
    item-size: 15px;
    position: absolute;
    top: 370px;
}

</style>
<script>
const dom = weex.requireModule('dom');
import { WxcTabPage, WxcPanItem, Utils, BindEnv } from 'weex-ui';
import WxcItem from './wxc-item.vue';
import Config from './config'
import { setTitle } from '../_mods/set-nav';
export default {
    components: { WxcTabPage, WxcPanItem, WxcItem },
    data: () => ({
        imageList: [
            { src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner_item1.png' },
            { src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner_item2.png' },
            { src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner_item1.png' }
        ],
        tabTitles: Config.tabTitles,
        tabStyles: Config.tabStyles,
        tabList: [],
        needSlider: true,
        demoList: [1, 2, 3, 4, 5, 6],
        supportSlide: true,
        isTabView: true,
        tabPageHeight: 0,
        contentOffset:0,
        desc: [{
            type: 'text',
            value: '特价机票|班期:清明 3/27-4/2等',
            theme: 'gray'
        }],
        tags: [{
            type: 'tag',
            value: '满100减20测试',
            theme: 'yellow'
        }]
    }),
    created() {
        setTitle('TabPage');

        this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
        Vue.set(this.tabList, 0, this.demoList);
    },
    methods: {
      recylerScroll: function(e) {
        if(e.contentOffset.y>-360 && e.contentOffset.y<0){
          this.contentOffset = e.contentOffset.y*-0.25
        }else if(e.contentOffset.y>=0){
          this.contentOffset = 0
        }else{
          this.contentOffset = 90
        }

      },
        wxcTabPageCurrentTabSelected(e) {
            const self = this;
            const index = e.page;
            /* 未加载tab模拟数据请求 */
            if (!Utils.isNonEmptyArray(self.tabList[index])) {
                setTimeout(() => {
                    self.tabList = []
                    Vue.set(self.tabList, index, self.demoList);

                }, 100);
            }
        },
        wxcPanItemPan(e) {
            if (BindEnv.supportsEBForAndroid()) {
                this.$refs['wxc-tab-page'].bindExp(e.element);
            }
        },
        bannerRouter(index) {
            this.$router.open({
                name: 'bannerArticle',
                params: { artIndex: index }
            })
        }
    }
};

</script>
