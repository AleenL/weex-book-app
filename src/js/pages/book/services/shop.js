/*
this is my stupid code
and only me can understand
I can hear rain knocking the window
The Moon hide in this city
Wish you have a sweet dream

created by Allen in 2018/05/29
*/

import http from '../utils/http'

/**
 * 获取商城书本列表
 */
export function bookList ({ style }, successBack, errorBack) {
  http.postAjax('shopList', { style}, successBack, errorBack)
}

/**
 * 获取单个书本的信息
 */

export function bookInfo({bookId}, successBack, errorBack){
  http.postAjax('bookInfo', {bookId}, successBack, errorBack)
}
