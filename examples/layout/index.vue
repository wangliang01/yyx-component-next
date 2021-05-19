<template>
  <section class="layout">
    <!-- 侧边栏 -->
    <Topbar></Topbar>
    <!-- 侧边栏 -->
    <Sidebar></Sidebar>
    <!-- mainapp -->
    <MainApp></MainApp>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Topbar from './Topbar.vue'
import Sidebar from './Sidebar.vue'
import MainApp from './MainApp.vue'
export default defineComponent({
  name: 'Layout',
  props: {
  },
  components: {
    Topbar,
    Sidebar,
    MainApp

  },
  setup() {
    return {

    }
  },
})
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: [r1] 60px [r2] auto [r3];
  grid-template-columns: [c1] 300px [c2] auto [c3];
  grid-template-areas: "header"
                        "sidebar main";
  .top-bar {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>
