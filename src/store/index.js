import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { permission, user}, // 创建模块实例
  // 全局定义getters便于访问 
  getters: { 
    roles: state => state.user.roles, 
    token: state => state.user.token,
    permission_routes: state => state.permission.routes,
  }
})

export default store