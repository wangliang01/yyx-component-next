# 使用vue3 + Ts 重写yyx-component

## 1. 通过使用脚手架快速生成项目
```js
yarn create @vitejs/app yyx-component-next --template vue-ts
```

## 2. 安装依赖 elementPlus
```js
yarn add element-plus
```

## 3. 修改目录
将原来的src目录改为examples目录，并在根目录下新增一个packages的目录

## 4. 在packages中写一个Button组件
```vue
<template>
  <el-button v-bind="$attrs"></el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'YButton',
  props: {
  },
  components: {
  },
  setup () {
    return {

    }
  },
})
</script>

<style lang="scss" scoped>

</style>

```

## 5. 修改vite.config.js
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.js'),
      name: 'yui'
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

```

## 6.打包（库模式），在dist目录生成es,umd两种格式的代码
```js
yarn build
```

## 7.在main.ts中引入打包好的库代码，进行调试
```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import yui from '../dist/yui.es'
import 'element-plus/lib/theme-chalk/index.css';

console.log('yui', yui);

const app = createApp(App)
app.use(ElementUI)
app.use(yui)
app.mount('#app')

```