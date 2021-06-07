<template>
  <div class="table">
    <slot></slot>
    <el-table
      :key="key"
      v-bind="tableAttrs"
      :data="data"
      :tooltip-effect="tableAttrs['tooltip-effect'] || 'dark'"
      :style="`width: ${$attrs.width || '100%'}`"
    >
      <TableItem
        v-for="(col, index) in columnAttrs"
        :key="index"
        :col="col"
      ></TableItem>
    </el-table>
    <el-pagination
      v-if="paginationAttrs.isPagination"
      v-bind="paginationAttrs"
      style="margin-top: 20px;text-align: right;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script lang="ts">
import { defaultTableAttrs, defaultColumn, defaultPagination } from './config'
import TableItem from './TableItem.vue'
import { defineComponent, getCurrentInstance, ref, watch } from 'vue'
interface ITableColumn {
  prop: string
  label: string
  [propName: string]: any
}
export default defineComponent({
  name: 'YTable',
  props: {
    /*  显示的数据， 等同于el-table中的data属性*/
    data: {
      type: Array,
      default() {
        return []
      }
    },
    /* columns: 是一个TableColumn的对象数组，TableColumn与el-table-column上的属性一一对应 */
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    /**
     * pagination: 分页属性：如果为Boolean为true,则取默认值，如果是对象，则merge默认值， 如果total有值，会覆盖pagination中的total属性
     */
    pagination: {
      type: [Object, Boolean],
      default: false
    },
    /* 分页总数 */
    total: {
      type: Number,
      default: 0
    },
    /* 重新加载函数 */
    reload: {
      type: Function,
      default() {
        return () => { }
      }
    }
  },
  components: {
    TableItem
  },
  setup(props, { emit, attrs }) {
    const instance = getCurrentInstance()
    const key = ref(Math.random().toString(32).replace('.', ''))
    // 表格属性，同el-table上的属性
    const tableAttrs = ref(defaultTableAttrs)
    // 表格项属性， 同el-table-column上的属性
    const columnAttrs = ref([])
    // 分页属性，同el-pagination上的属性
    const paginationAttrs = ref({ isPagination: false })

    // TODO 这里直接写props.data会报警告，还没有搞明白
    const data = ref((props as any).data)
    const pagination = ref((props as any).pagination)
    const columns = ref((props as any).columns)
    const total = ref((props as any).total)
    // 对分页属性，分页总数进行监听
    watch([pagination, total], (val, oldVal) => {
      console.log(val, oldVal);
      getPagination()
    })

    const handleSizeChange = (pageSize: number) => {
      emit('size-change', pageSize)
      paginationAttrs.value = Object.assign({}, paginationAttrs.value, {
        pageSize,
        type: 'size-change',
        currentPage: 1
      })
      if (typeof (props as any).reload === 'function') {
        (props as any).reload(paginationAttrs.value)
      }
    }

    const handleCurrentChange = (currentPage: number) => {
      emit('page-current-change', currentPage)
      paginationAttrs.value = Object.assign({}, paginationAttrs.value, {
        currentPage,
        type: 'current-change',
      })
      if (typeof (props as any).reload === 'function') {
        (props as any).reload(paginationAttrs.value)
      }
    }

    // 获取element table上的属性
    const getTableAttrs = () => {
      Object.keys(defaultTableAttrs).forEach(key => {
        if (attrs[key] !== undefined) {
          tableAttrs.value[key] = attrs[key]
        }
      })
      tableAttrs.value = Object.assign({}, defaultTableAttrs, tableAttrs.value)
    }

    // 获取element table col上的属性
    const getTableColumnAttrs = () => {
      columnAttrs.value = columns.value.map((column: ITableColumn) => {
        const obj = Object.assign({}, defaultColumn, column)
        return obj
      })
    }

    // 获取element 分页属性
    const getPagination = () => {
      // 获取element 分页属性
      if (pagination.value) {
        if (typeof pagination.value === 'object') {
          paginationAttrs.value = {
            ...defaultPagination,
            ...pagination.value,
            isPagination: true
          }
        } else {
          paginationAttrs.value = {
            ...defaultPagination,
            isPagination: true
          }
        }
      }
    }

    const mergeElTableMethods = () => {
      console.log("实例", instance);

    }

    const init = () => {
      // 解决y-table组件没有el-table中的相关方法问题
      mergeElTableMethods()

      getTableAttrs()

      getTableColumnAttrs()

      getPagination()
    }

    init()

    return {
      key,
      data,
      columns,
      tableAttrs,
      columnAttrs,
      paginationAttrs,
      handleSizeChange,
      handleCurrentChange
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
