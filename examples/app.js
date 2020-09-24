import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import NDesign from "../src/index";
console.log(1);
Vue.use(NDesign);

// 开启debug模式
Vue.config.debug = true;

const app = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
