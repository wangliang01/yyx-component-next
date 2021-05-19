import { createRouter, createWebHashHistory } from 'vue-router'
import Button from '../views/Button.vue'
// 定义路由
const routes = [
  {
    path: '/',
    redirect: '/button'
  },
  {
    path: '/button',
    component: Button
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 导出路由实例
export default router

