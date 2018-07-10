<!--created by allen on 2018/05/29-->

<template>
  <div class="message-wrap">
    <navigation-bar title="消息"></navigation-bar>
    <div class="message-banner">
      <image class="message-banner-image"
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531217371131&di=11adedd1fd0bb2de321093870b1d615e&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F00%2F69%2F40%2F197fc7596ea416d86b027e3b945b6e04.jpg"></image>
    </div>
    <div class="message-list">
      <div class="message-list-item">
        <image class="message-avatar" ></image>
      </div>
        <div class="message-list-info">
          <div class="message-list-title">
            <text class="message-list-nickName">整个重庆老子最帅</text>
            <text class="message-list-time">2分钟前</text>
          </div>
          <text class="message-list-show">你好，请问我的书可以借给你吗？我真的很喜欢！</text>
          <text class="message-list-advance">离你2km</text>
        </div>
      </div>
    </div>
</template>

<script>
  import navigationBar from '../common/navigationBar'

  export default{
    components: {
      'navigation-bar': navigationBar
    }
  }
</script>

<style>
  .message-wrap {
    flex: 1;
    background-color: #fff;
    width: 750px;
  }
</style>
