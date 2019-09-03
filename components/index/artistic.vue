<template>
    <div class="m-istyle">
        <dl>
            <dt>有格调</dt>
            <dd 
                v-for="(index, idx) in list" :key="idx">
                {{index.name}}
            </dd>
        </dl>
        <div
            class="ibody">
            <template></template>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                {
                    name: '全部',
                    childs: []
                }, {
                    name: '约会聚餐',
                    childs: []
                }, {
                    name: '丽人SPA',
                    childs: []
                }, {
                    name: '电影演出',
                    childs: []
                }, {
                    name: '品质出游',
                    childs: []
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>