import http from '../utils/http'


//获取banner中的文章
export function bannerArt ({ index }, successBack, errorBack) {
    http.postAjax('bannerArt', { index }, successBack, errorBack)
}