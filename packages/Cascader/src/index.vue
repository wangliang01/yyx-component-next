<template>
    <el-cascader v-model="currentValue" :options="options" @change="handleValueChange" v-bind="$attrs" clearable></el-cascader>
</template>

<script lang="ts">
import { emit } from 'process'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'YCascader',
  props: {
    /* 双向绑定的值 */
    modelValue: {
      type: [String, Number],
      required: true
    },
    /* 获取options的接口方法 */
    dataApi: {
      type: Function,
      required: true
    },
    /* 格式化数据的方法 */
    format: {
      type: Function
    },
    /* 是否只取最后一个值 */
    lastChild: {
      type: Boolean,
      default: true
    }
    
  },
  components: {
  },
  async setup(props, {emit}) {
    const currentValue = ref(props.modelValue)
    // 获取下拉列表选项
    const options = ref([])
    if (typeof props.dataApi) {
      // 从接口获取数据
      const res = await props.dataApi()
      let data = res.data ? res.data : res
      if (typeof props.format === 'function') {
        // 对数据进行格式化操作
        data = props.format(data)
      }
      options.value = data
    }

    // 改变下拉列表选项时触发
    const handleValueChange = (value: string[] | string) => {
      if (Array.isArray(value)) {
        let tempValue: string = props.lastChild ? value.slice(-1).join(',') : value.join(',')
        emit('update:modelValue', tempValue)
      } else {
        emit('update:modelValue', value)
      }

      console.log("value change", value);
      
    }
  
    return {
      currentValue,
      options,
      handleValueChange
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
