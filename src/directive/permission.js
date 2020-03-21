import store from '@/store'

const permission = {
  inserted(el, binding){
    // 获取指令的值：按钮要求角色数组
    const {value: pRoles } = binding
    // 获取用户角色
    // instanceof 类型判断 true or false
    // 结构value并取别名pRoles
    const roles = store.getter && store.getter.roles
    if(pRoles && pRoles instanceof Array && pRoles.length > 0) {
      // 判断用户角色中是否有按钮要求的角色
      // includes 数组中是否包含摸个值
      // some 数组只要有一项满足某种条件就为true
      const hasPermission = roles.some(role => {
        return pRoles.includes(role)
      })
      // 如果没有权限删除当前dom
      if(!hasPermission){
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`需要指定按钮要求角色数组，如v-permission="['admin', 'editor']"`)
    }
  }
}

export default permission;