<template>
  <div class="side-bar">
    <el-menu router :default-active="route.path">
      <el-menu-item v-for="item in menuList" :key="item.path" :index="item.path">
        {{item.meta && item.meta.title}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import {routes} from '../router'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'Sidebar',
  props: {
  },
  components: {
  },
  setup() {
    const menuList = routes.filter(route => route.name)
    const route = useRoute()
    return {
      menuList,
      route
    }
  },
})
</script>

<style lang="scss" scoped>
.side-bar {
  border-right: 1px solid #eee;
}
</style>
