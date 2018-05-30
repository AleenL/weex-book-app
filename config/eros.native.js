module.exports = {
  'appName': 'eros-demo3',
  'appBoard': '/config/index.js',
  // android 监听全局事件homeBack 如果为true 安卓端需要自行调用router.finish方法来关闭应用
  'androidIsListenHomeBack': 'true',
  'version': {
    'android': '1.0.0',
    'iOS': '1.0.0'
  },
  'page': {
    'homePage': '/pages/book/index.js',
    'mediatorPage': '/mediator/index.js',
    'navBarColor': '#ffffff',
    'navItemColor': '#333'
  },
  'url': {
    'socketServer': 'ws://192.168.0.151/:8890',
    'image': 'https://lev-inf.benmu-health.com/test/xxx',
    'bundleUpdate': 'http://localhosts:3001/app/check'
  },
  'zipFolder': {
    'iOS': '/ios/WeexEros/WeexEros',
    'android': '/android/WeexFrameworkWrapper/app/src/main/assets'
  },
  'getui': {
    'enabled': 'false',
    'appId': '',
    'appKey': '',
    'appSecret': ''
  }
}
