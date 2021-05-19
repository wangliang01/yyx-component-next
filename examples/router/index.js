import { createRouter, createWebHashHistory } from 'vue-router'
import Button from '../views/Button.vue'
import BatchImport from '../views/BatchImport.vue'
// 定义路由
export const routes = [
  {
    path: '/',
    redirect: '/button'
  },
  {
    path: '/button',
    name: 'Button',
    component: Button,
    meta: {
      title: '按钮'
    }
  },
  {
    path: '/batch-import',
    name: 'BatchImport',
    component: BatchImport,
    meta: {
      title: '批量导入'
    }
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 导出路由实例
export default router

