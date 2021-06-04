<template>
  <h3>CategoryCascader品类级联选择器</h3>
  <p class="desc">主要用于日常的导入，支持导入后编辑，支持输入框，选择框，日期组件。</p>
  <section class="section">
    <suspense>
      <y-category-cascader
        v-model="value"
        v-model:presentText="presentText"
        :dataApi="dataApi"
      ></y-category-cascader>
    </suspense>
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
    const presentText = ref('选项1 / 选项2 / 选项4')
    const dataApi = (() => {
      let id = 0
      let level = 0
      return () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 })
              .map(item => ({
                value: ++id,
                label: `选项${id}`,
                leaf: level >= 2
              }))
            level++
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve({
              data: nodes
            })
          }, 300)
        })
      }
    })()
    return {
      value,
      presentText,
      dataApi
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
