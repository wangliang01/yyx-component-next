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
      <y-button type="warning">警告按钮</y-button>
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
        type="warning"
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
        type="warning"
        round
      >警告按钮</y-button>
      <y-button
        type="danger"
        round
      >危险按钮</y-button>
    </div>
    <div class="row">
      <y-button
        circle
        icon="el-icon-search"
      ></y-button>
      <y-button
        type="primary"
        icon="el-icon-edit"
        circle
      ></y-button>
      <y-button
        type="success"
        icon="el-icon-check"
        circle
      ></y-button>
      <y-button
        type="info"
        icon="el-icon-message"
        circle
      ></y-button>
      <y-button
        type="warning"
        icon="el-icon-star-off"
        circle
      ></y-button>
      <y-button
        type="danger"
        icon="el-icon-delete"
        circle
      ></y-button>
    </div>
  </section>

  <h3>禁用状态</h3>
  <p class="desc">按钮不可用状态</p>
  <section class="section">
    <div class="row">
      <y-button disabled>默认按钮</y-button>
      <y-button
        disabled
        type="primary"
      >主要按钮</y-button>
      <y-button
        disabled
        type="success"
      >成功按钮</y-button>
      <y-button
        disabled
        type="info"
      >信息按钮</y-button>
      <y-button
        disabled
        type="warning"
      >警告按钮</y-button>
      <y-button
        disabled
        type="danger"
      >危险按钮</y-button>
    </div>
    <div class="row">
      <y-button
        plain
        disabled
      >朴素按钮</y-button>
      <y-button
        plain
        disabled
        type="primary"
      >主要按钮</y-button>
      <y-button
        plain
        disabled
        type="success"
      >成功按钮</y-button>
      <y-button
        plain
        disabled
        type="info"
      >信息按钮</y-button>
      <y-button
        plain
        disabled
        type="warning"
      >警告按钮</y-button>
      <y-button
        plain
        disabled
        type="danger"
      >危险按钮</y-button>
    </div>
  </section>

  <h3>文字按钮</h3>
  <p class="desc">没有边框和背景色的按钮</p>
  <section class="section">
    <div class="row">
      <y-button type="text">文字按钮</y-button>
      <y-button
        type="text"
        disabled
      >文字按钮</y-button>
    </div>
  </section>

  <h3>图标按钮</h3>
  <p class="desc">带图标的按钮可增强辨识度（有文字）或节省空间（无文字）</p>
  <section class="section">
    <y-button
      type="primary"
      icon="el-icon-edit"
    ></y-button>
    <y-button
      type="primary"
      icon="el-icon-share"
    ></y-button>
    <y-button
      type="primary"
      icon="el-icon-delete"
    ></y-button>
    <y-button
      type="primary"
      icon="el-icon-search"
    >搜索</y-button>
    <y-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></y-button>
  </section>

  <h3>加载中</h3>
  <p class="desc">点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
  <section class="section">
    <y-button
      type="primary"
      :loading="true"
    >加载中</y-button>
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
