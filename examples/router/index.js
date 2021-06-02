import { createRouter, createWebHashHistory } from 'vue-router'
import Button from '../views/Button.vue'
import BatchImport from '../views/BatchImport.vue'
import Input from '../views/Input.vue'
import Cascader from '../views/Cascader.vue'
import AddressCascader from '../views/AddressCascader.vue'
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
  },
  {
    path: '/input',
    name: 'Input',
    component: Input,
    meta: {
      title: 'Input输入框'
    }
  },
  {
    path: '/cascader',
    name: 'Cascader',
    component: Cascader,
    meta: {
      title: '级联选择器'
    }
  },
  {
    path: '/address-cascader',
    name: 'AddressCascader',
    component: AddressCascader,
    meta: {
      title: '地址级联选择器'
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

