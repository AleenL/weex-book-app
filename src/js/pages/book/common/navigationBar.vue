<!--created by allen on 2018/05/29-->
<template>
  <div>
    <div :style="styleObj" ></div>
    <div v-if="show" class="ud-navigationBar-container" :style="{height: height}">
      <div class="ud-navigationBar"
           :class="[borderBottom && 'ud-navigationBar-borderBottom']"
           :style="{ height: height,backgroundColor: backgroundColor,justifyContent:'space-between'}"
           v-if="type === 'default'">
        <div class="left" @click="leftButtonClicked" aria-label="返回" :accessible="true">
          <slot name="left">
            <text  v-if="leftButton && !leftText"
                   class="icon button"
                   :style="{ color: textLeftColor }">{{leftButton}}</text>
            <text v-if="leftText"
                  class="icon-text"
                  :style="{ color: textLeftColor }"
            >{{leftText}}</text>
          </slot>
        </div>
        <slot name="middle">
          <text class="middle-title" :style="{ color: textColor,fontWeight:titleFontWeight}">{{title}}</text>
        </slot>
        <div class="right" @click="rightButtonClicked">
          <slot name="right">
            <text v-if="rightButton && !rightText"
                  class="icon button"
                  :style="{ color: textRightColor }"
                  :aria-hidden="true">{{rightButton}}</text>
            <text v-if="rightText"
                  class="icon-text"
                  :style="{ color: textRightColor }"
            >{{rightText}}</text>
          </slot>
        </div>
      </div>
      <div class="ud-navigationBar"
           :class="[borderBottom && 'ud-navigationBar-borderBottom']"
           :style="{ height: height,backgroundColor: backgroundColor,justifyContent:justifyContent}" v-else>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .icon {
    font-family: iconfont;
    
  }
  .ud-navigationBar-container {
    width: 750px;
    height: 90px;
    background-color: #FFFFFF;
    
  }
  .ud-navigationBar-borderBottom {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #f5f5f5;
  }
  .ud-navigationBar {
    width: 750px;
    height: 90px;
    flex-direction: row;
    align-items: center;
  }
  
  .left {
    width: 180px;
    height: 90px;
    padding-left: 24px;
    flex-direction: row;
  }
  
  .middle-title {
    font-size: 34px;
    color: #000000;
    
  }
  
  .right {
    width: 180px;
    height: 90px;
    padding-right: 24px;
    align-items: flex-end;
    
  }
  
  .button {
    font-size: 36px;
    color: #000000;
    line-height: 90px;
  }
  
  .icon-text {
    font-size: 32px;
    color: #121C32;
    line-height: 90px;
  }
</style>

<script>
  const Navigator = weex.requireModule('navigator');
  import util from '../utils/utils'
  export default {
    props: {
      type: { //default： 子项左中右三栏space-between布局      custom： 子项完全自定义布局
        type: String,
        default: 'default'
      },
      height: {//导航栏高度
        type: Number,
        default: 90
      },
      borderBottom: {
        type: Boolean,
        default: false
      },
      backgroundColor: {//导航栏背景色
        type: String,
        default: '#FFFFFF'
      },
      justifyContent: {//type 为custom时： 子项在主轴对排列方式
        type: String,
        default: 'flex-start'
      },
      //以下参数仅在type 为default时有效
      leftButton: {//左按钮图片
        type: String,
        default: '\ue622'
      },
      textColor: {//文字颜色
        type: String,
        default: '#000000'
      },
      textLeftColor:{//右按钮颜色
        type:'String',
        default: '#000000'
      },
      textRightColor:{//右按钮颜色
        type:'String',
        default: '#000000'
      },
      rightButton: {//右按钮图片
        type: String,
        default: ''
      },
      title: {//标题
        type: String,
        default: ''
      },
      titleFontWeight: {//标题加粗
        type: Number,
        default: 900
      },
      leftText: {//左按钮文字
        type: String,
        default: ''
      },
      rightText: {//右按钮文字
        type: String,
        default: ''
      },
      useDefaultReturn: {//是否使用默认的返回
        type: Boolean,
        default: true
      },
      show: {//是否显示导航栏
        type: Boolean,
        default: true
      }
    },
    data(){
      return{
        styleObj:{
          height:0,
          backgroundColor:'#ffffff'
        }
      }
    },
    created() {
      util.initIconFont()
      this.styleObj.height = weex.config.env.statusBarHeight
    },
    methods: {
      leftButtonClicked() {
        if (this.useDefaultReturn) {
          Navigator.pop({}, e => {
          });
        }
        this.$emit('wxcMinibarLeftButtonClicked', {});
      },
      rightButtonClicked() {
        const hasRightContent = this.rightText || this.rightButton || (this.$slots && this.$slots.right);
        hasRightContent && this.$emit('rightClicked', {});
      }
    }
  };
</script>
