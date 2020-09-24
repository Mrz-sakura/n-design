

import Vue from 'vue';
import VueRouter from "vue-router";
// 路由配置
Vue.use(VueRouter)

const router = new VueRouter({
  esModule: false,
  mode: "history",
  routes: [
    {
      path: "/",
      component: (resolve) => require(["./coms/home.vue"], resolve),
    },
  ],
});

export default router