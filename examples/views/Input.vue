<template>
  <h2>Input输入框</h2>
  <p class="desc">通过鼠标或键盘输入字符</p>

  <h3>基础用法</h3>
  <section class="section">
    <y-input
      v-model="value"
      number
      max="100"
      min="90"
      placeholder="请输入内容"
    ></y-input>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'InputPage',
  props: {
  },
  components: {
  },
  setup() {
    const value = ref('')
    return {
      value
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
