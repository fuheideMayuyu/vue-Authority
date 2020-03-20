import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import "./icons/index.js"
import './plugins/element.js'
import vPermission from './directive/permission'

Vue.config.productionTip = false

// 注册自定义指令 参数分别为指令名, 指令函数
Vue.directive('permission', vPermission)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

