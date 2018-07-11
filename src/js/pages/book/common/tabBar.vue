<template>
    <div class="wrapper">
        <div v-for="(i,index) in items"  :key="index" class="bar-item"  @click="tabTo(i.key)">
            <div v-if="index !== 2">
                <text class="bar-ic iconfont"  :class="[pIndexKey == i.key ? `bar-active` : ``]"  v-if="pIndexKey == i.key">{{i.activeicon}}</text>
                <text class="bar-ic iconfont" v-else>{{i.icon}}</text>
            </div>
            <div v-else>
                <text class="bar-ic iconfont"  :class="[pIndexKey == i.key ? `bar-active` : ``]"  v-if="pIndexKey == i.key">{{i.activeicon}}</text>
                <text class="bar-update iconfont" v-else>{{i.icon}}</text>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
         indexKey: {
             type: String,
             default: 'home'
         },
         reClick: {
             type: Boolean,
             default: false
         },
        items: {
            type: Array
        }
    },
    data() {
        return {
            pIndexKey: 'home',
        }
    },
    beforeCreate () {
        const domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': 'iconfont',
            'src': 'url(\'bmlocal://iconfont/iconfont.ttf\')'
        });
    },
    created () {
        this.$event.on('tabBarJump', (params) => {
            this.pIndexKey = params.data.key
        });
    },
    methods: {
        tabTo(_key) {
            if (this.pIndexKey == _key) return;
            this.pIndexKey = _key;
            this.$emit('tabTo', {
                status: 'tabTo',
                data: {
                    key: _key
                }
            })
        }
    }
}
</script>

<style scoped>
.iconfont {
    font-family: iconfont;
}

.wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    border-top-width: 1px;
    border-top-color: #d9d9d9;
    background-color: #fafafa;
}

.bar-item {
    flex: 1;
}

.bar-txt,
.bar-ic {
    color: #666;
    text-align: center;
}

.bar-active {
    color: #00C4D1;
}

.bar-ic {
    padding-top: 20px;
    font-size: 50px;
}

.bar-txt {
    font-size: 22px;
    padding-top: 2px;
}

.bar-update{
    position:relative;
    top: -30px;
    font-size: 100px;
    color: #00C4D1;
    text-align: center;
}
</style>
