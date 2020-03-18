import router from './router';
import store from './store';
import { Message } from 'element-ui';
import { getToken } from '@/utils/auth'; 

const whiteList = ['/login'] // 无需令牌白名单

router.beforeEach(async (to, from, next) =>{
  const hasToken = getToken()
  if(hasToken){
    if(to.path === '/login'){
      // 若已登录重定向至首页
      next({path: '/'})
    } else {
      // 若用户角色已附加则说明动态路由已添加
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if(hasRoles){
        next()
      } else {
        try{
          const { roles } = await store.dispatch('user/getInfo')
          const accessRoutes = await store.dispatch('permission/generateRouter', roles)
          router.addRoutes(accessRoutes)
          // 继续切换路由，确保addRoutes完成
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    // 用户无令牌
    if(whiteList.indexOf(to.path) !== -1){
      // 白名单内路由放过
      next()
    } else {
      // 重定向至登录页
      next(`/login?redirecct=${to.path}`)
    }
  }
})