<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./components/HomeSwiper";

import { getHomeData } from "network/home.js";
import RecommendView from './components/RecommendView.vue';
export default {
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeData().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },

  computed: {},

  methods: {},
};
</script>
<style lang='css' scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>