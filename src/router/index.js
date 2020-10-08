import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// 在vue-cli创建的项目中 @ 表示src 可以不受当前路径的影响
const routes = [
  {
    path: '/menus',
    component: () => import('../components/menu/Menus.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login/Index')
  }
]

const router = new VueRouter({
  routes
})

export default router
