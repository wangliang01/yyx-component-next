<template>
  <h2>Button按钮</h2>
  <p class="desc">常用的操作按钮。</p>

  <h3>基础用法</h3>
  <p class="desc">基础的按钮用法。</p>
  <section class="section">
    <div class="row">
      <y-button>默认按钮</y-button>
      <y-button type="primary">主要按钮</y-button>
      <y-button type="success">成功按钮</y-button>
      <y-button type="info">信息按钮</y-button>
      <y-button type="warn">警告按钮</y-button>
      <y-button type="danger">危险按钮</y-button>
    </div>
    <div class="row">
      <y-button plain>朴素按钮</y-button>
      <y-button
        type="primary"
        plain
      >主要按钮</y-button>
      <y-button
        type="success"
        plain
      >成功按钮</y-button>
      <y-button
        type="info"
        plain
      >信息按钮</y-button>
      <y-button
        type="warn"
        plain
      >警告按钮</y-button>
      <y-button
        type="danger"
        plain
      >危险按钮</y-button>
    </div>
    <div class="row">
      <y-button round>圆角按钮</y-button>
      <y-button
        type="primary"
        round
      >主要按钮</y-button>
      <y-button
        type="success"
        round
      >成功按钮</y-button>
      <y-button
        type="info"
        round
      >信息按钮</y-button>
      <y-button
        type="warn"
        round
      >警告按钮</y-button>
      <y-button
        type="danger"
        round
      >危险按钮</y-button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ButtonPage',
  props: {
  },
  components: {
  },
  setup() {
    return {

    }
  },
})
</script>

<style lang="scss" scoped>

</style>
