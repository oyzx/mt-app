<template>
  <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col
                :span="3"
                class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
            </el-col>
            <el-col
                :span="15"
                class="center">
                <div class="wrapper">
                    <el-input
                        @focus="focus"
                        @blur="blur"
                        @input="input"
                        v-model="search" 
                        placeholder="搜索商家或地点" />
                    <button class="el-button el-button--primary">
                        <i class="el-icon-search"></i>
                    </button>
                    <dl
                        v-if="isHotPlace"
                        class="hotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlace" :key="index">{{item}}</dd>
                    </dl>
                    <dl
                        v-if="isSearchList"
                        class="searchList">
                        <dd v-for="(item, index) in searchList" :key="index">{{item}}</dd>
                    </dl>
                </div>
                <p class="suggset">
                    <a href="#">北京欢乐谷</a>
                    <a href="#">故宫博物院 故宫</a>
                    <a href="#">水立方嬉水乐园</a>
                    <a href="#">八达岭长城</a>
                    <a href="#">北京失恋博物展</a>
                </p>
                <ul class="nav">
                    <li>
                        <nuxt-link 
                            to="/" 
                            class="takeout">美团外卖</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link 
                            to="/" 
                            class="movie">猫眼电影</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link 
                            to="/" 
                            class="hotel">美团酒店</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link 
                            to="/" 
                            class="apartment">民宿/公寓</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link 
                            to="/" 
                            class="business">商家入驻</nuxt-link>
                    </li>
                </ul> 
            </el-col>
            <el-col
                :span="6"
                class="right">
                <ul class="security">
                    <li><i class="refund"></i><p class="txt">随时退</p></li>
                    <li><i class="single"></i><p class="txt">不满意退单</p></li>
                    <li><i class="overdue"></i><p class="txt">过期退</p></li>
                </ul>
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
    data () {
        return {
            search: '',
            isFocus: false,
            hotPlace: ["北京欢乐谷", "故宫博物院", "水立方嬉水乐园", "八达岭长城", "北京失恋博物展"],
            searchList: ["故宫", "北京欢乐谷"]
        }
    },
    watch: {
        search: function () {
            console.log("search: ", this.search)
        }
    },
    computed: {
        isHotPlace: function () {
            return this.isFocus && !this.search
        },
        isSearchList: function () {
            return this.isFocus && this.search
        }
    },
    methods: {
        focus: function () {
            this.isFocus = true
        },
        blur: function () {
            let self = this
            setTimeout(function () {
                self.isFocus = false
            })
        },
        input: function () {
            console.log("input")
        }
    }
}
</script>

<style>

</style>