import http from '../utils/http'


//获取banner中的文章
export function bannerArt ({ index }, successBack, errorBack) {
    http.postAjax('bannerArt', { index }, successBack, errorBack)
}

//获取首页的三个title列表
export function homeList({ style }, successBack, errorBack){
    http.postAjax('homeList', { style }, successBack, errorBack)
}

//获取圈子的列表
export function zoneList({ city }, successBack, errorBack){
  http.postAjax('zoneList', {city}, successBack, errorBack)
}
