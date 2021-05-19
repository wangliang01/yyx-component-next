<template>
  <div class="side-bar">
    <el-menu>
      <el-menu-item>
        按钮
      </el-menu-item>
      <el-menu-item>
        批量导入
      </el-menu-item>
    </el-menu>
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
.side-bar {
  border-right: 1px solid #eee;
}
</style>
