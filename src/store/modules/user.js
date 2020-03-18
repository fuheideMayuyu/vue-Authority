import { getToken, setToken, removeToken } from '@utils/auth'
// 状态存储
const state = {
  token: getToken(),
  roles: []
  // 其他用户信息
}

// 状态修改-直接变更状态
const mutations = {
  SET_TOKEN: (state, token) =>{
    state.token = token;
  },
  SET_ROLES: (state, roles) =>{
    state.roles = roles
  }
}

// 异步状态修改-通过mutations 修改状态
const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username } = userInfo;
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
        if(username === 'admin' || username === 'jerry'){
          commit('SET_TOKEN', username); // 通过该方法修改
          setToken(username);
          resolve() // resolve是成功后的回调函数
        } else {
          reject('用户名、密码错误')
        }
      }, 1000)
    })
  },

  // get user info
  getInfo(){
    return new Promise((resolve) => {
      setTimeout(() =>{
        const roles = state.token === 'admin' ? ['admin'] : ['editor']
        commit('SET_ROLES', roles)
        resolve({roles})
      }, 1000)
    })
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", ""); 
      commit("SET_ROLES", []); 
      removeToken(); 
      resolve(); 
    });
  }
}

export default { 
  namespaced: true, 
  state, 
  mutations, 
  actions 
};
