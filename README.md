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
