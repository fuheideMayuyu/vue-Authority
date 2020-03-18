import Vue from "vue"
import Router from "vue-router"
import Layout from '@/layout' // 布局页

Vue.use(Router)

export const constRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [

      {
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        name: 'home',
        mate: {
          title: 'home',
          icon: 'qq'
        }
      }
    ]
  },
]

export const asyncRoutes = [
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "home" */ '@/views/About.vue'),
        name: 'about',
        mate: {
          title: 'About',
          icon: 'qq',
          roles: ['admin', 'editor']
        }
      }
    ]

  },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL, // 基础路径
  routes: constRoutes
})