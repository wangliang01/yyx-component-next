<template>
  <div class="main-app">
    <ButtonPage></ButtonPage>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ButtonPage from '../components/Button.vue'
export default defineComponent({
  name: '',
  props: {
  },
  components: {
    ButtonPage
  },
  setup() {
    const componentId = ref('ButtonPage')
    return {
      componentId
    }
  },
})
</script>

<style lang="scss" scoped>
.main-app {
  padding: 20px;
}
</style>
