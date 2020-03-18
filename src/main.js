import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import "./icons/index.js"
import './plugins/element.js'
import './permission'

// console.log('process.env.BASE_URL', process.env.BASE_URL)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

