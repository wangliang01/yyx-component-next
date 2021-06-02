<template>
  <el-cascader
    v-bind="$attrs"
    :ref="cascader"
    v-model="currentValue"
    :options="options"
    @change="handleValueChange"
  ></el-cascader>
</template>

<script lang="ts">
import { ComponentInternalInstance, defineComponent, getCurrentInstance, nextTick, ref } from 'vue'
import { getAddressMap } from './address'
interface IRef {
  [propName: string]: any
}
export default defineComponent({
  name: 'YAddressCascader',
  props: {
    modelValue: {
      type: [String, Array],
      required: true
    },
    presentText: {
      type: String,
      default: ''
    }
  },
  components: {
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance() as ComponentInternalInstance
    const currentValue = ref(props.modelValue)
    const cascader = ref(`category_cascader_${Date.now()}`)
    const options = ref(getAddressMap())

    const handleValueChange = (value: Array<string> | string) => {
      if (Array.isArray(value)) {
        emit('update:modelValue', value.join(','))
      } else {
        emit('update:modelValue', value)
      }

      nextTick(() => {
        const presentText = (instance.refs as IRef)[cascader.value].presentText

        const separator = (instance.refs as IRef)[cascader.value].separator
        const reg = new RegExp(separator, 'g')
        if (presentText) {
          emit('update:presentText', presentText.replace(reg, ','))
        }
      })
    }
    return {
      currentValue,
      cascader,
      options,
      handleValueChange
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
