<template>
  <div class="top-bar">
    <i class="iconfont icon-logo"></i>
    <h1>yyx-component</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
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
.top-bar {
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: blue;
  border-bottom: 1px solid #eee;
  .iconfont{
    font-size: 32px;
    padding-right: 10px;
  }
}
</style>
