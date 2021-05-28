<template>
  <h3>AddressCascader地址级联选择器</h3>
  <p class="desc">主要用于日常的导入，支持导入后编辑，支持输入框，选择框，日期组件。</p>
  <section class="section">
    <y-address-cascader
      v-model="address"
      v-model:presentText="presentText"
    ></y-address-cascader>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  name: '',
  props: {
  },
  components: {
  },
  setup() {
    const address = ref('')
    const presentText = ref('')

    watch(presentText, () => {
      console.log(presentText.value);
      console.log(address.value);
    })
    return {
      address,
      presentText
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
