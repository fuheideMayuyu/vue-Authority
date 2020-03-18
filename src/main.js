import Vue from 'vue'
import router from './router'
import App from './App.vue'
import "./icons/index.js"
import './plugins/element.js'

// console.log('process.env.BASE_URL', process.env.BASE_URL)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

