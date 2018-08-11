// 这里的后缀都是 .js 因为打包出来的都是js文件，而不是.vue文件，我们要告诉客户端跳转那个js

//  这里的路径和dev.json路径的区别
//  pages里面配置的是路由跳转的地址，也就是dev生成的 dist文件夹下的js bundle路径 从dist/js开始
//  dev.json 的 exports 需要打包的js地址，填入src的需要被打包成js bundle的地址   从src开始

export default {
  'index': {
    title: ' ',
    url: '/pages/book/index.js',
  },
  'zone': {
    title: '',
    url: '/pages/book/zone/index.js'
  },
  'user': {
    title: '',
    url: '/pages/book/user/index.js'
  },
  'shop': {
    title: '',
    url: '/pages/book/shop/index.js'
  },
  'regist': {
    title: '即刻注册',
    url: '/pages/book/regist/index.js',
    titleColor: '#233'
  },
  'login': {
    title: '登录',
    url: '/pages/book/login/index.js'
  },
  "bannerArticle": {
    url: '/pages/book/bannerArticle/index.js'
  },
  'home': {
    title: '首页',
    url: '/pages/book/home/index.js'
  },
  'main': {//tabbar
    title: '',
    url: '/pages/book/main.js'
  },
  'bookInfo':{
    url:'/pages/book/bookInfo/index.js'
  },
  'message':{
    url:'/pages/book/message/message.js'
  }
}
