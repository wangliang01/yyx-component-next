<template>
  <div class="main-app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MainApp',
  props: {
  },
  setup() {
    return {
    }
  },
})
</script>

<style lang="scss" scoped>
.main-app {
  padding: 20px;
}
</style>
