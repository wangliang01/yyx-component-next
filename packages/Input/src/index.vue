<template>
  <el-input
    v-model="currentValue"
    :clearable="$attrs.clearable === undefined ? true : $attrs.clearable"
    v-bind="$attrs"
    @input="handleInputEvent"
    @blur="handleBlurEvent"
  ></el-input>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick } from 'vue'
import { isLessThan } from '../../utils/bigNumber'
export default defineComponent({
  name: 'YInput',
  props: {
    /* 传入的值 */
    modelValue: {
      type: [String, Number],
      default: ''
    },
    /* 只能输入数字，包含小数 */
    number: {
      type: Boolean,
      default: false
    },
    /*  只能输入整数，优先级大于number,即如果传了number,integer只有integer会生效 */
    integer: {
      type: Boolean,
      default: false
    },
    /* 整数位数 */
    integerDigit: {
      type: [Number, String],
      default: 10
    },
    /* 小数位数 */
    precision: {
      type: [Number, String],
      default: 2
    },
    /* 最小值 */
    min: {
      type: [Number, String],
      default: 0
    },
    /* 最大值 */
    max: {
      type: [Number, String],
      default: Infinity
    }
  },
  components: {
  },
  setup(props, { emit }) {
    let precision: number = Number(props.precision)
    // 精度传入不正确时，修正为2
    const dealPrecision = () => {
      if (isNaN(precision)) {
        precision = 2
      }
      if (precision < 0) {
        precision = 2
      }
    }

    // 处理输入
    const handleInputEvent = (val: string) => {
      let reg
      let integer = props.integer
      let number = props.number
      let integerDigit = Number(props.integerDigit)
      let precision = props.precision
      if (number) {
        reg = new RegExp(`^(([1-9]{1}\\d{0,${integerDigit - 1}})|(0{1}))([.](\\d{1,${precision}}))?$`)
      }
      if (integer) {
        reg = new RegExp(`^(([1-9]{1}\\d{0,${integerDigit - 1})|(0{1}))$`)
      }
      handleInputValue(val, reg)
    }

    // 失焦的处理
    const handleBlurEvent = () => {
      const min = props.min
      const max = props.max
      nextTick(() => {
        if (min && isLessThan(currentValue.value, min)) {
          // 如果传入min,且不为0时,并且val小于min时
          emit('update:modelValue', min)
        } else if (max && isLessThan(max, currentValue.value)) {
          // 如果传入max,,并且val大于min时
          emit('update:modelValue', max)
        } else {
          // 没有min,或者max
          emit('update:modelValue', currentValue.value)
        }
      })
    }

    // 处理精度传入非法字符
    dealPrecision()

    // currentValue
    const currentValue = computed({
      get() {
        return props.modelValue
      },
      set(val: string | number) {
        handleInputValue(val)
      }
    })

    // 处理输入的值
    const handleInputValue = (val: string | number, reg?: RegExp) => {
      val = val.toString()
      // 如果传入了正则表达式
      if (reg) {
        reg = new RegExp(reg)
        // 根据传入的正则表达式，得到匹配的值 
        const matches: string[] | null = val.match(reg)
        if (matches) {
          // 如果匹配值存在,则emit到父组件
          emit('update:modelValue', val)
        } else {
          nextTick(() => {
            val = val.toString()
            const integerDigit = Number(props.integerDigit)
            // 获取10位整数的正则表达式
            const intReg = new RegExp(`^(([1-9]{1}\\d{0,${integerDigit - 1}})|(0{1}))[.]?$`)
            // 10位浮点数的正则表达式
            const floatReg = new RegExp(`^(([1-9]{1}\\d{0,${integerDigit - 1}})|(0{1}))\\.?(\\d{1,${precision}})?`)
            // 含有数字的表达式
            const numberReg = /^\d*$/
            // 浮点数匹配值
            const matchesFloat = val.match(floatReg)
            // 整数匹配值
            const matchesInt = val.match(intReg)

            // 判断浮点数匹配值
            if (matchesFloat) {
              if (numberReg.test(matchesFloat[0])) {
                if (matchesInt) {
                  // 整数匹配值存在
                  emit('update:modelValue', matchesInt[0])
                } else {
                  emit('update:modelValue', matchesFloat[0].slice(0, -1))
                }
              } else {
                if (props.number) {
                  // 含有小数点
                  emit('update:modelValue', matchesFloat[0])
                } else {
                  emit('update:modelValue', matchesFloat[0].slice(0, -1))
                }
              }
            } else {
              emit('update:modelValue', '')
            }
          })
        }
      } else {
        // 文本类型
        emit('update:modelValue', val)
      }
    }


    return {
      currentValue,
      handleInputEvent,
      handleBlurEvent
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
