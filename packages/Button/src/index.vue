<template>
  <el-button v-bind="$attrs">
    <slot></slot>
  </el-button>
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
