<!--created by allen on 2018/05/29-->

<template>
    <div class="wxc-item">
        <text>aa</text>
    </div>
</template>

<style scoped>
    .wxc-item {
        width: 750px;
        height: 500px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .item-image-cover {
        width: 700px;
        height: 380px;
        position: relative;
    }

    .status-bg {
        position: absolute;
        bottom: 40px;
        right: 20px;
        border-radius: 4px;
    }

    .status-color {
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 5px;
        color: #fff;
        font-size: 24px;
        font-weight: 900;
    }

    .opening {
        background-color: #00C4D1;
    }

    .closed {
        background-color: #ccc;
    }

    .item-image {
        width: 700px;
        height: 380px;
        border-radius: 10px;
    }

    .image-desc {
        position: absolute;
        left: 24px;
        top: 186px;
        width: 198px;
        height: 36px;
        background-color: rgba(0, 0, 0, .8);
        align-items: center;
        justify-content: center;
    }

    .image-text {
        font-size: 24px;
        color: #ffffff;
    }

    .item-content {
        flex: 1;
        border-bottom-width: 1px;
        border-bottom-color: #e0e0e0;
        border-bottom-style: solid;
        justify-content: space-between;
        padding-top: 24px;
        padding-right: 24px;
        padding-bottom: 18px;
    }

    .item-text {
        font-size: 28px;
        padding-top: 10px;
        padding-bottom: 10px;
        height: 40px;
        width: 700px;
        text-align: left;
        color: #333333;
        lines: 1;
        text-overflow: ellipsis;
    }

    .activity-title {
        font-size: 28px;
        padding-top: 10px;
        padding-bottom: 10px;
        height: 40px;
        width: 600px;
        text-align: left;
        color: #333333;
        lines: 1;
        text-overflow: ellipsis;
    }

    .activity {
        font-size: 28px;
        padding-top: 10px;
        padding-bottom: 10px;
        height: 40px;
        width: 50px;
        text-align: left;
        color: #333333;
        lines: 1;
        text-overflow: ellipsis;
    }

    .item-text-des {
        font-size: 22px;
        padding-top: 10px;
        padding-bottom: 10px;
        height: 60px;
        width: 500px;
        text-align: left;
        color: #989898;
        lines: 2;
        text-overflow: ellipsis;
    }

    .item-address-des {
        font-size: 22px;
        padding-top: 10px;
        padding-bottom: 10px;
        height: 60px;
        width: 400px;
        text-align: left;
        color: #989898;
        lines: 1;
        text-overflow: ellipsis;
    }

    .cost-head {
        font-size: 24px;
        color: #FF4C42;
        font-weight: 900;
        margin-top: 8px;
    }

    .cost-show {
        font-size: 32px;
        color: #FF4C42;
        font-weight: 900;
    }

    .item-text-anther {
        font-size: 22px;
        padding-top: 10px;
        padding-bottom: 10px;
        height: 60px;
        width: 150px;
        text-align: right;
        color: #515151;
        lines: 1;
        text-overflow: ellipsis;
    }

    .address {
        color: #00CBD5;
        width: 250px;
    }

    .anther-info {
        width: 700px;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .activity-cost {
        color: #FF4C42;
        font-size: 30px;
        width: 50px;
        justify-content: flex-end;
        align-content: flex-end;
        flex-direction: row;

    }

    .activity-info {
        width: 700px;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        height: 50px;
    }

    .item-price {
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        height: 36px;
    }

    .price-num {
        flex-direction: row;
        align-items: center;
    }

    .yen {
        color: #FF5E00;
        font-size: 24px;
        line-height: 26px;
        margin-right: 2px;
        margin-top: 4px;
    }

    .price {
        color: #FF5E00;
        font-size: 36px;
        line-height: 40px;
    }

    .postfix {
        font-size: 24px;
        line-height: 28px;
        color: #A5A5A5;
        margin-top: 6px;
        margin-left: 2px;
    }

    .category-tag {
        padding-right: 16px;
        padding-left: 12px;
        height: 36px;
        justify-content: center;
        border-top-right-radius: 0;
        border-bottom-right-radius: 24px;
        background-color: #FFC900;
        position: absolute;
        top: 24px;
        left: 24px;
    }

    .tag-text {
        color: #3d3d3d;
        font-size: 22px;
        line-height: 36px;
    }

</style>

<script>
    const expressionBinding = weex.requireModule('expressionBinding');
    import {WxcRichText, WxcSpecialRichText, Utils} from 'weex-ui';

    export default {
        components: {WxcRichText, WxcSpecialRichText},
        props: {
            avatar: {
                type: [String, Array],
                default: ''
            },
            nickName: {
                type: String,
                default: ''
            },
            sell: {
                type: String,
                default: ''
            },
            address: {
                type: String,
                default: ""
            },
            bookImage: {
                type: [String, Array],
                default: ''
            },
            des: {
                type: [String, Number],
                default: 0
            },
            icon: {
                type: String,
                default: ''
            },
            bookName: {
                type: String,
                default: ''
            },
            want: {
                type: [String, Number],
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
