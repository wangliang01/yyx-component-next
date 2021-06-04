<template>
  <!-- 品类选择器 -->
  <el-cascader
    v-model="currentValue"
    v-bind="$attrs"
    clearable
    :ref="refs"
    :props="propsData"
    @change="handleValueChange"
  ></el-cascader>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, ComponentInternalInstance, nextTick, watch } from 'vue'
interface INode {
  level: number
  value: number
}

interface ICategoryData {
  label: string | number
  value: string | number
  name: string | number
  id: string | number
}

interface IRef {
  [propName: string]: any
}


export default defineComponent({
  name: 'YCategoryCascader',
  props: {
    /* 父组件传过来的值： ['1', '2', '4'] */
    modelValue: {
      type: [Array, String]
    },
    /* 请求数据的api接口 */
    dataApi: {
      type: Function,
      required: true
    },
    /* 显示的label值：选项1 / 选项2 / 选项4 */
    presentText: {
      type: String,
      default: ''
    }
  },
  components: {
  },
  setup(props, {emit}) {
    const that = getCurrentInstance() as ComponentInternalInstance
    const currentValue = ref(props.modelValue)
    const refs = `category_cascader_${Date.now()}`
    const propsData = {
      lazy: true,
      checkStrictly: false,
      lazyLoad: async (node: INode, resolve: Function) => {
        const params = {
          level: node.level || 0,
          parentId: node.value || 0
        }

        if (props.dataApi instanceof Function) {
          const res = await props.dataApi(params)
          console.log("lazyLoad data", res);
          if (res.data && Array.isArray(res.data)) {
            const data = res.data.map((item: ICategoryData) => {
              return {
                label: item.label || item.name,
                value: item.value || item.id,
                leaf: node.level >= 2
              }
            })
            
            resolve(data)
          } else {
            resolve(res)
          }
        } else {
          throw new TypeError('dataApi参数类型不是一个Function')
        }
      }
    }

    // 对currentValue进行watch
    watch(currentValue, (val) => {
      currentValue.value = typeof val === 'string' ? val.split(',') : val
    })

    console.log("propsData", propsData);
    

    const handleValueChange = (value: string[] | string) => {
      nextTick(() => {
        if (Array.isArray(value)) {
          emit('update:modelValue', value.join(','))
        } else {
          emit('update:modelValue', value)
        }
        const presentText = (that.refs as IRef)[refs].presentText
        console.log("presentText", that);
        
        emit('update:presentText', presentText)
      })
    }
    return {
      currentValue,
      propsData,
      refs,
      handleValueChange
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
