<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="tab-icon" src="~assets/img/tabbar/home.svg" alt />
        <img slot="tab-icon-active" src="~assets/img/tabbar/home_active.svg" alt />
        <div slot="tab-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img slot="tab-icon" src="~assets/img/tabbar/category.svg" alt />
        <img slot="tab-icon-active" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="tab-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="red">
        <img slot="tab-icon" src="~assets/img/tabbar/shopcart.svg" alt />
        <img slot="tab-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="tab-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img slot="tab-icon-active" src="~assets/img/tabbar/profile_active.svg" alt />
        <img slot="tab-icon" src="~assets/img/tabbar/profile.svg" alt />
        <div slot="tab-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  data() {
    return {};
  },

  components: {
    TabBar,
    TabBarItem,
  },

  computed: {},

  methods: {},
};
</script>
<style lang='css' scoped>
</style>