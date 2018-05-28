export const tabConfig = [{
    icon: '\ue601',
    activeicon: '\ue601',
    name: "首页",
    key: 'home',
    src: `${weex.config.eros.jsServer}/dist/js/pages/book/home/index.js`,
    visibility: 'visible'
}, {
    icon: '\ue60b',
    activeicon: '\ue60b',
    name  : "圈子",
    key: 'topic',
    src: `${weex.config.eros.jsServer}/dist/js/pages/book/zone/index.js`,
    visibility: 'hidden'
}, {
    icon: '\ue60c',
    activeicon: '\ue60c',
    name: "上传新书",
    key: 'update',
    src: `${weex.config.eros.jsServer}/dist/js/pages/book/home/index.js`,
    visibility: 'hidden'
}, {
    icon: '\ue607',
    activeicon: '\ue607',
    name: "商品",
    key: 'class',
    src: `${weex.config.eros.jsServer}/dist/js/pages/book/home/index.js`,
    visibility: 'hidden'
}, {
    icon: '\ue603',
    activeicon: '\ue603',
    name: "统计",
    key: 'shop',
    src: `${weex.config.eros.jsServer}/dist/js/pages/book/user/index.js`,
    visibility: 'hidden'
}]
