<template>
  <h2>Table表格</h2>
  <p class="desc">用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>

  <h3>基础表格</h3>
  <section class="section">
    <y-table :data="tableData" :columns="columns"></y-table>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, h } from 'vue'
export default defineComponent({
  name: '',
  props: {
  },
  components: {
  },
  setup() {
    const tableData = ref([
      {
        name: '张三',
        age: 20
      },
      {
        name: '李四',
        age: 18
      }
    ])
    const columns = reactive([
      {
        prop: 'name',
        label: '名称'
      },
      {
        prop: 'age',
        label: '年龄',
      }
    ])
    return {
      tableData,
      columns
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
