<template>
    <div class="app-wrapper">
        <embed v-for="(item,index) in items" :src="item.src" type="weex" class="content"
               :style="{ visibility: item.visibility }"></embed>
        <tab-bar @tabTo="onTabTo" :items="items"></tab-bar>
        <div class="touch-bar"></div>
    </div>
</template>
<script>

    import util from './utils/utils';
    import tabBar from './common/tabBar';
    import {tabConfig} from './config'

    export default {
        bmRouter: {
            viewWillAppear() {
                console.log('home-index-viewWillAppear');
            },
            viewWillBackAppear(params) {
                console.log('home-index-viewWillBackAppear');
            }
        },
        components: {
            'tab-bar': tabBar,
        },
        beforeCreate() {
            util.initIconFont()
        },
        created() {
            this.$event.on('tabBarJump', (params) => {
                this.onTabTo(params)
            });
        },
        data() {
            return {
                items: tabConfig,
            }
        },
        methods: {
            onTabTo(_result) {
                let _key = _result.data.key || '';
                this.items.forEach((val) => {
                    if (val.key === _key) {
                        val.visibility = 'visible'
                        return
                    }
                    val.visibility = 'hidden'
                })
            },
        }
    }

</script>
<style>
    body {
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color: #333;
    }

</style>
<style lang="sass" type="text/css" scoped>
    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin-top: 0;
        /*margin-bottom: 100;*/
    }

    .app-wrapper {
        background-color: #f4f4f4;
    }

    .touch-bar {
        height: 68px;
        width: 750px;
    }

</style>
