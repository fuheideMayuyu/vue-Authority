import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons";
import "./plugins/element.js";
// 路由守卫
import "./permission";
import vPermission from "./directive/permission";

Vue.directive("permission", vPermission);

Vue.config.productionTip = false;

// 注册自定义指令 参数分别为指令名, 指令函数
Vue.directive('permission', vPermission)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

