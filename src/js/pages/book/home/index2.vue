<template>
    <waterfall class="page" ref="waterfall" v-bind:style="{paddingBottom:padding}" :column-width="columnWidth" :column-count="1" :column-gap="columnGap" :show-scrollbar="showScrollbar" :scrollable="scrollable" @scroll="recylerScroll" @loadmore="loadmore" loadmoreoffset=3000>
        <!-- <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
            <loading-indicator class="indicator"></loading-indicator>
            <text class="refreshText">{{refreshText}}</text>
        </refresh> -->
        <div>

            <slider class="slider" interval="3000" auto-play="false" :index="2">
                <div class="frame" v-for="(img, idx) in imageList" @click="bannerRouter(idx)">
                    <image class="image" resize="cover" :src="img.src"></image>
                </div>
                <indicator class="indicator"></indicator>
            </slider>
                
        </div>
        
        <div>
<wxc-tab-page  ref="wxc-tab-page" :tab-titles="tabTitles" :tab-styles="tabStyles" title-type="icon" :needSlider="needSlider" :is-tab-view="isTabView" :tab-page-height="tabPageHeight" :spm-c="4307989" @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
            <list show-scrollbar='' v-for="(v,index) in tabList" :key="index" class="item-container" :style="{ height: (tabPageHeight - tabStyles.height -90) +'px' }">
                <cell class="border-cell"></cell>
                <cell v-for="(demo,key) in v" class="cell" :key="key" :accessible="true" aria-label="卡片测试｜出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游,价格219元">
                    <wxc-pan-item url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675" @wxcPanItemPan="wxcPanItemPan">
                        <wxc-item image="https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg" :image-text="tabTitles[index].title" title="卡片测试｜出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游" :desc="desc" :tags="tags" price="666" price-desc="月售58笔｜999+条评论" />
                    </wxc-pan-item>
                </cell>
            </list>
        </wxc-tab-page>          
        </div>
        <!-- <cell v-for="(item, index) in items" :key="item.src" class="cell" ref="index">
            <div class="item" @appear="itemAppear(item.src)" @disappear="itemDisappear(item.src)">
                <text v-if="item.name" class="itemName">{{item.name}}</text>
                <image class="itemPhoto" :src="item.src"></image>
                <text v-if="item.desc" class="itemDesc">{{item.desc}}</text>
                <text v-if="item.behaviourName" class="itemClickBehaviour"> {{item.behaviourName}}</text>
            </div>
        </cell> -->
    </waterfall>
</template>
<style>
.item-container {
    width: 750px;
    background-color: #fff;
    justify-content: space-around;
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

.page {
    background-color: #EFEFEF;
}

.refresh {
    height: 128;
    width: 750;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.refreshText {
    color: #888888;
    font-weight: bold;
}

.indicator {
    color: #888888;
    height: 40;
    width: 40;
    margin-right: 30;
}


.stickyHeader {
    position: sticky;
    height: 94;
    flex-direction: row;
    padding-bottom: 6;
}

.stickyWrapper {
    flex-direction: row;
    background-color: #00cc99;
    justify-content: center;
    align-items: center;
    flex: 1;
}

.stickyTextImageWrapper {
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.stickyText {
    color: #FFFFFF;
    font-weight: bold;
    font-size: 32;
    margin-right: 12;
}

.stickyImage {
    width: 64;
    height: 64;
    border-radius: 32;
}

.cell {
    padding-top: 6;
    padding-bottom: 6;
}

.item {
    background-color: #FFFFFF;
    align-items: center;
}

.itemName {
    font-size: 28;
    color: #333333;
    line-height: 42;
    text-align: left;
    margin-top: 24;
}

.itemPhoto {
    margin-top: 18;
    width: 220;
    height: 220;
    margin-bottom: 18;
}

.itemDesc {
    font-size: 24;
    margin: 12;
    color: #999999;
    line-height: 36;
    text-align: left;
}

.itemClickBehaviour {
    font-size: 36;
    color: #00cc99;
    line-height: 36;
    text-align: center;
    margin-top: 6;
    margin-left: 24;
    margin-right: 24;
    margin-bottom: 30;
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
    data: function() {
        return {
            
            refreshing: false,
            refreshText: '↓   pull to refresh...',
            columnGap: 3,
            columnWidth: 'auto',
            contentOffset: '0',
            showHeader: true,
            showScrollbar: false,
            scrollable: true,
            showStickyHeader: false,
            appearImage: null,
            disappearImage: null,
            stickyHeaderType: 'none',
            tabTitles: Config.tabTitles,
            tabStyles: Config.tabStyles,
            tabList: [],
            needSlider: true,
            demoList: [1, 2, 3],
            supportSlide: true,
            isTabView: true,
            tabPageHeight: 1334,
            desc: [{
                type: 'text',
                value: '特价机票|班期:清明 3/27-4/2等',
                theme: 'gray'
            }],
            tags: [{
                type: 'tag',
                value: '满100减20测试',
                theme: 'yellow'
            }],
            // fixedRect:'',
            imageList: [
                { src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner_item1.png' },
                { src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner_item2.png' },
                { src: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/banner_item1.png' }
            ],
            banner: {
                photos: [
                    { src: 'https://gw.alicdn.com/tps/TB1JyaCPFXXXXc9XXXXXXXXXXXX-140-140.jpg' },
                    { src: 'https://gw.alicdn.com/tps/TB1MwSFPFXXXXbdXXXXXXXXXXXX-140-140.jpg' },
                    { src: 'https://gw.alicdn.com/tps/TB1U8avPFXXXXaDXpXXXXXXXXXX-140-140.jpg' },
                    { src: 'https://gw.alicdn.com/tps/TB17Xh8PFXXXXbkaXXXXXXXXXXX-140-140.jpg' },
                    { src: 'https://gw.alicdn.com/tps/TB1cTmLPFXXXXXRXXXXXXXXXXXX-140-140.jpg' },
                    { src: 'https://gw.alicdn.com/tps/TB1oCefPFXXXXbVXVXXXXXXXXXX-140-140.jpg' }
                ]
            },
            items: [{
                    src: 'https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg',
                    name: 'Thomas Carlyle',
                    desc: 'Genius only means hard-working all one\'s life',
                    behaviourName: 'Change width',
                    behaviour: 'changeColumnWidth',
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1Hv1JPFXXXXa3XXXXXXXXXXXX-370-370.jpg',
                    desc: 'The man who has made up his mind to win will never say "impossible "',
                    behaviourName: 'Change gap',
                    behaviour: 'changeColumnGap'
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1eNKuPFXXXXc_XpXXXXXXXXXX-370-370.jpg',
                    desc: 'There is no such thing as a great talent without great will - power',
                    behaviourName: 'Change count',
                    behaviour: 'changeColumnCount'
                }
            ]
        }
    },

    created() {
        // let self = this
        // setTimeout(()=>{
        //   weex.requireModule('dom').getComponentRect(this.$refs.fixed, result=>{
        //     const x = result.size.left
        //     const y = result.size.top
        //     const width = result.size.width
        //     const height = result.size.height
        //     self.fixedRect = `${x}|${y}|${width}|${height}`
        //   })
        // }, 3000)
        setTitle('TabPage');
        this.tabPageHeight = Utils.env.getPageHeight();
        this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
        Vue.set(this.tabList, 0, this.demoList);
    },

    methods: {
        wxcTabPageCurrentTabSelected(e) {
            const self = this;
            const index = e.page;
            console.log(e.page)
            /* 未加载tab模拟数据请求 */
            if (!Utils.isNonEmptyArray(self.tabList[index])) {
                setTimeout(() => {
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
        },
        recylerScroll: function(e) {
            this.contentOffset = e.contentOffset.y
        },
        loadmore: function(e) {
            console.log('receive loadmore event')
            // this.$refs.waterfall.resetLoadmore()
        },

        itemAppear: function(src) {
            this.appearImage = src;
        },

        itemDisappear: function(src) {
            this.disappearImage = src;
        },

        onrefresh(event) {
            this.refreshing = true
            this.refreshText = "loading..."
            setTimeout(() => {
                this.refreshing = false
                this.refreshText = '↓   pull to refresh...'
            }, 2000)
        },

        onpullingdown(event) {
            // console.log(`${event.pullingDistance}`)
            if (event.pullingDistance < -64) {
                this.refreshText = '↑   release to refresh...'
            } else {
                this.refreshText = '↓   pull to refresh...'
            }
        }
    }
}

</script>
