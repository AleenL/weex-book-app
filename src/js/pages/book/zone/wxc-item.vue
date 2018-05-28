<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/03/31. -->

<template>
    <div class="wxc-item">
        <div >
            <image :src="picture"
                   class="item-image"
                   resize="cover"></image>
        </div>
        <div class="activity-info">
            <text class="item-address-des" >{{title}}</text>
            <text class="item-text-anther address">{{address}}</text>
        </div>
        <div>
            <text class="zone-des">{{des}}</text>
        </div>
        <div class="zone-info">
            <div class="people">
                <text class="people-number">{{people}}个圈友</text>
                <image class="people-icon" :src="icon"></image>
            </div>
            <text class="join-us">加入我们</text>
        </div>
    </div>
</template>

<style scoped>
    .wxc-item {
        width: 750px;
        height: 570px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: #fff;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
    }

    .people{
        width: 150px;
        height:40px;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: row;
    }
    .people-number{
        font-size: 24px;
        color:#00C4D1;
    }

    .people-icon{
        width:30px;
        height:30px;
    }
    .zone-info{
        justify-content: space-between;
        align-items: center;
        width:700px;
        flex-direction: row;
    }

    .item-image {
        width: 700px;
        height: 380px;
        border-radius: 10px;
    }


    .join-us{
        width:120px;
        height:40px;
        background-color: #00C4D1;
        color:#fff;
        font-size: 24px;
        font-weight: 700;
        border-radius: 4px;
        line-height: 40px;
        text-align: center;
    }

    .zone-des {
        font-size: 24px;
        width:700px;
        text-align: left;
        padding-top:20px;
        lines: 1;
        text-overflow: ellipsis;
        color: #00C4D1;
    }


    .item-address-des{
        font-size: 30px;
        width:400px;
        text-align: left;
        color: #221;
        font-weight: 700;
        text-overflow: ellipsis;
    }



    .item-text-anther{
        font-size: 22px;
        width:150px;
        text-align: right;
        lines: 1;
        text-overflow: ellipsis;
    }

    .address{
        color: #221;
        font-weight: 700;
    }



    .activity-info{
        width:700px;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: row;
        height:70px;
    }



</style>

<script>
    const expressionBinding = weex.requireModule('expressionBinding');
    import {WxcRichText, WxcSpecialRichText, Utils} from 'weex-ui';

    export default {
        components: {WxcRichText, WxcSpecialRichText},
        props: {
            title: {
                type: [String, Array],
                default: ''
            },
            picture: {
                type: [String, Array],
                dafault:''
            },
            title: {
                type: String,
                default: ''
            },
            des: {
                type: String,
                default: ''
            },
            address: {
                type: String,
                default: ''
            },
            people: {
                type: String,
                dafault:''
            },
            icon: {
                type: String,
                default: ''
            }
        },
        data: () => ({
            yenSymbol: '\u00A5'
        }),
        computed: {
            isTitleString() {
                return Utils.isString(this.title);
            }
        }
    };
</script>
