import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Category = () => import("../views/category/Catgory.vue");
const Home = () => import("../views/home/Home.vue");
const Profile = () => import("../views/profile/Profile.vue");
const Shopcart = () => import("../views/shopcart/Shopcart.vue");

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/shopcart",
    component: Shopcart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
