<template>
  <h2>Table表格</h2>
  <p class="desc">用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
  <!-- 基础表格 -->
  <h3>基础表格</h3>
  <p class="desc">基础的表格展示用法。</p>
  <section class="section">
    <y-table
      :data="tableData"
      :columns="columns"
    ></y-table>
  </section>

  <!-- 带斑马纹表格 -->
  <h3>带斑马纹表格</h3>
  <p class="desc">使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
  <section class="section">
    <y-table
      stripe
      :data="tableData"
      :columns="columns"
    ></y-table>
  </section>
  <!-- 带边框表格 -->
  <h3>带边框表格</h3>
  <section class="section">
    <y-table
      border
      :data="tableData"
      :columns="columns"
    ></y-table>
  </section>
  <!-- 带状态表格 -->
  <h3>带状态表格</h3>
  <p class="desc">可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
  <section class="section">
    <y-table
      :row-class-name="tableRowClassName"
      :data="tableData"
      :columns="columns"
    ></y-table>
  </section>
  <!-- 固定表头 -->
  <h3>固定表头</h3>
  <p class="desc">纵向内容过多时，可选择固定表头。</p>
  <section class="section">
    <y-table
      border
      :data="tableData2"
      :columns="columns2"
    ></y-table>
  </section>
  <!-- 固定列 -->
  <h3>固定列</h3>
  <p class="desc">横向内容过多时，可选择固定列。</p>
  <section class="section">
    <y-table
      border
      :data="tableData2"
      :columns="columns2"
    ></y-table>
  </section>
  <!-- 固定列和表头 -->
  <h3>固定列和表头</h3>
  <p class="desc">横纵内容过多时，可选择固定列和表头。</p>
  <section class="section">
    <y-table
      border
      height="200"
      :data="tableData2"
      :columns="columns2"
    ></y-table>
  </section>
  <!-- 流体高度-->
  <h3>流体高度</h3>
  <p class="desc">当数据量动态变化时，可以为 Table 设置一个最大高度。</p>
  <section class="section">
    <y-table
      border
      max-height="250"
      :data="tableData2"
      :columns="columns2"
    ></y-table>
  </section>
  <!-- 多级表头-->
  <h3>多级表头</h3>
  <p class="desc">数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。</p>
  <section class="section">
    <y-table
      border
      max-height="250"
      :data="tableData2"
      :columns="columns3"
    ></y-table>
  </section>
  <!-- 单选-->
  <h3>单选</h3>
  <p class="desc">选择单行数据时使用色块表示。</p>
  <section class="section">
    <y-table
      ref="singleTable"
      border
      max-height="250"
      :data="tableData2"
      :columns="columns4"
      @current-change="handleCurrentChange"
    ></y-table>
    <div class="y-mt-10">
      <y-button @click="setCurrent(tableData2[1])">选中第二行</y-button>
      <y-button @click="setCurrent()">取消选择</y-button>
    </div>
  </section>
  <!-- 多选-->
  <h3>多选</h3>
  <p class="desc">选择多行数据时使用 Checkbox。</p>
  <section class="section">
    <y-table
      ref="multipleTable"
      border
      max-height="250"
      :data="tableData2"
      :columns="columns5"
      @current-change="handleCurrentChange"
    ></y-table>
    <div class="y-mt-10">
      <y-button @click="toggleSelection([tableData2[1], tableData2[2]])">切换第二，第三行的选中状态</y-button>
      <y-button @click="toggleSelection()">取消选择</y-button>
    </div>
  </section>
  <!-- 排序-->
  <h3>排序</h3>
  <p class="desc">对表格进行排序，可快速查找或对比数据。</p>
  <section class="section">
    <y-table
      :default-sort="{prop: 'date', order: 'descending'}"
      max-height="250"
      :data="tableData2"
      :columns="columns2"
    ></y-table>
  </section>
  <!-- 筛选-->
  <h3>筛选</h3>
  <p class="desc">对表格进行筛选，可快速查找到自己想看的数据。</p>
  <section class="section">
    <el-button @click="resetDateFilter">清除日期过滤器</el-button>
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <y-table
      :default-sort="{prop: 'date', order: 'descending'}"
      ref="filterTable"
      row-key="date"
      max-height="250"
      :data="tableData3"
      :columns="columns6"
    ></y-table>
  </section>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref, ComponentInternalInstance } from 'vue'
import { ElButton, ElTag } from 'element-plus'
interface IRowClassName {
  row: object,
  rowIndex: number
}
export default defineComponent({
  name: '',
  props: {
  },
  components: {
  },
  setup() {
    const instance = getCurrentInstance() as ComponentInternalInstance
    const tableData = ref([{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }])
    const columns = reactive([
      {
        prop: 'date',
        label: '日期'
      },
      {
        prop: 'name',
        label: '姓名',
      },
      {
        prop: 'address',
        label: '地址',
      }
    ])

    const tableData2 = reactive([{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-04',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1517 弄',
      zip: 200333
    }, {
      date: '2016-05-01',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1519 弄',
      zip: 200333
    }, {
      date: '2016-05-03',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1516 弄',
      zip: 200333
    }])
    const tableData3 = reactive([{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      tag: '家'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄',
      tag: '公司'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
      tag: '家'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
      tag: '公司'
    }])
    const columns2 = reactive([
      {
        prop: 'date',
        label: '日期',
        sortable: true,
        width: 150
      },
      {
        prop: 'name',
        label: '姓名',
        width: 120
      },
      {
        prop: 'province',
        label: '省份',
        width: 120
      },
      {
        prop: 'city',
        label: '市区',
        width: 120
      },
      {
        prop: 'address',
        label: '地址',
        width: 600
      },
      {
        prop: 'zip',
        label: '邮编',
        width: 120
      },
      {
        label: '操作',
        width: 100,
        render: (h: any) => {
          return h('div', {}, [
            h(ElButton, {
              type: 'text',
              size: 'small'
            }, '查看'),
            h(ElButton, {
              type: 'text',
              size: 'small'
            }, '编辑')
          ])
        }
      }
    ])

    const columns3 = reactive([
      {
        prop: 'date',
        label: '日期',
        width: 150
      },
      {
        label: '配送信息',
        children: [
          {
            prop: 'name',
            label: '姓名',
            width: 120
          },
          {
            prop: 'province',
            label: '省份',
            width: 120
          },
          {
            prop: 'city',
            label: '市区',
            width: 120
          },
          {
            prop: 'address',
            label: '地址',
            width: 600
          },
          {
            prop: 'zip',
            label: '邮编',
          },
        ]
      },
    ])

    const columns4 = reactive([
      {
        type: "index",
        width: 50
      },
      {
        prop: 'date',
        label: '日期',
        width: 150
      },
      {
        prop: 'name',
        label: '姓名',
        width: 120
      },
      {
        prop: 'province',
        label: '省份',
        width: 120
      },
      {
        prop: 'city',
        label: '市区',
        width: 120
      },
      {
        prop: 'address',
        label: '地址',
        width: 600
      },
      {
        prop: 'zip',
        label: '邮编',
        width: 120
      }
    ])
    const columns5 = reactive([
      {
        type: "selection",
        width: 55
      },
      {
        prop: 'date',
        label: '日期',
        width: 150
      },
      {
        prop: 'name',
        label: '姓名',
        width: 120
      },
      {
        prop: 'province',
        label: '省份',
        width: 120
      },
      {
        prop: 'city',
        label: '市区',
        width: 120
      },
      {
        prop: 'address',
        label: '地址',
        width: 600
      },
      {
        prop: 'zip',
        label: '邮编',
        width: 120
      }
    ])
    const columns6 = reactive([
      {
        prop: 'date',
        label: '日期',
        width: 180,
        sortable: true,
        columnKey: 'date',
        filters: [{ text: '2016-05-01', value: '2016-05-01' }, { text: '2016-05-02', value: '2016-05-02' }, { text: '2016-05-03', value: '2016-05-03' }, { text: '2016-05-04', value: '2016-05-04' }],
        filterMmethod(value, row, column) {
          console.log("filterMethod", value, row);
          
          const property = column['property'];
          return row[property] === value;
        }
      },
      {
        prop: 'name',
        label: '姓名',
        width: 180
      },
      {
        prop: 'address',
        label: '地址',
        formatter(row) {
          return row.address
        }
      },
      {
        prop: 'tag',
        label: '标签',
        width: 100,
        filters: [{ text: '家', value: '家' }, { text: '公司', value: '公司' }],
        filterMmethod(value, row) {
          console.log("filterMethod", value, row);

          return row.tag === value
        },
        filterPlacement: "bottom-end",
        render(h, { row }) {
          return h(ElTag, {
            type: row.tag === '家' ? 'primary' : 'success',
            disableTransitions: true
          }, row.tag)
        }
      }
    ])
    const setCurrent = (row: any) => {
      console.log("row", row);
      console.log(instance);

      console.log("singleTable", instance.refs.singleTable);

      (instance.refs.singleTable as any).setCurrentRow(row)
    }
    const tableRowClassName = ({ rowIndex }: IRowClassName) => {
      console.log('tableRowClassName', rowIndex);
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }

    const handleCurrentChange = val => {
      console.log("val", val);

    }

    const toggleSelection = (rows) => {
      if (rows) {
        rows.forEach(row => {
          (instance.refs.multipleTable as any).toggleRowSelection(row);
        });
      } else {
        (instance.refs.multipleTable as any).clearSelection();
      }
    }

    const resetDateFilter = () => {
      (instance.refs.filterTable as any).clearFilter('date');
    }

    const clearFilter = () => {
      (instance.refs.filterTable as any).clearFilter();
    }
    return {
      tableData,
      tableData2,
      tableData3,
      columns,
      columns2,
      columns3,
      columns4,
      columns5,
      columns6,
      setCurrent,
      tableRowClassName,
      handleCurrentChange,
      toggleSelection,
      resetDateFilter,
      clearFilter
    }
  },
})
</script>

<style lang="scss" scoped>
:deep(.el-table .warning-row){
  background: oldlace;
}

:deep(.el-table .success-row) {
  background: #f0f9eb;
}
</style>
