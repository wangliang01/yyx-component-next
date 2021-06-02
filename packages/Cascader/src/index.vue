<template>
  <el-cascader v-model="currentValue"></el-cascader>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'YCascader',
  props: {
    modelValue: {
      type: [String, Number],
      required: true
    },
    dataApi: {
      type: Function,
      required: true
    },
    format: {
      type: Function
    }
  },
  components: {
  },
  async setup(props) {
    const currentValue = ref(props.modelValue)
    const options = ref([])
    if (typeof props.dataApi) {
      const res = await props.dataApi()
      let data = res.data ? res.data : res
      if (typeof props.format === 'function') {
        data = props.format(data)
      }
      options.value = data

      console.log(data);

    }
    return {
      currentValue,
      options
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
