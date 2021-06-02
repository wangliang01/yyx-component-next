<template>
  <h3>Cascader级联选择器</h3>
  <p class="desc">主要用于日常的导入，支持导入后编辑，支持输入框，选择框，日期组件。</p>
  <section class="section">
    <y-cascader
      v-model="value"
      :data-api="dataApi"
    ></y-cascader>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: '',
  props: {
  },
  components: {
  },
  setup() {
    const value = ref('')
    const dataApi = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              label: 'Html',
              value: 'Html'
            },
            {
              label: 'Css',
              value: 'Css'
            },
            {
              label: 'JavaScript',
              value: 'JavaScript'
            }
          ])
        }, 500)
      })
    }
    return {
      value,
      dataApi
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
