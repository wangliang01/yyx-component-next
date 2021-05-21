<template>
  <!-- 按钮 -->
  <el-button
    :type="$attrs.type"
    icon="el-icon-upload"
    @click="showDialog"
  >
    {{btnText}}
  </el-button>
  <!-- 按钮 end -->

  <!-- 弹窗  -->
  <el-dialog
    :title="btnText"
    v-model="dialogVisible"
    :close-on-click-modal="false"
    append-to-body
    lock-scroll
    destroy-on-close
    width="92%"
    :before-close="handleBeforeClose"
  >
    <el-upload
      class="upload"
      action=""
      :multiple="false"
      :show-file-list="false"
      accept="csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      :http-request="httpRequest"
    >
      <el-button
        type="primary"
        icon="el-icon-upload"
      >选择文件</el-button>
      <template #tip>
        <div class="el-upload__tip mt-10">
          只能上传excel文件<span v-if="size">，且不超过{{ size }}kb</span>
          <el-link
            class="template"
            type="primary"
            :href="downloadUrl"
          >下载模板</el-link>
        </div>
      </template>
    </el-upload>
    <el-button-group>
      <el-button
        class="y-mt-10"
        @click="handleToggleEdit"
      >{{ !isEdit ?'编辑数据' : '查看数据' }}</el-button>
    </el-button-group>

    <!-- <y-table
      class="mt-10"
      :max-height="312"
      :data="tableData"
      :columns="currentColumns"
      :pagination="importPagination"
      :total="total"
      :reload="reloadData"
      :col-index="1"
    ></y-table> -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button
          type="primary"
          :disabled="!total"
          @click="handleConfirm"
        >确 定</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 弹窗 end -->

</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  name: 'YBatchImport',
  props: {
    btnText: {
      type: String,
      default: '批量上传'
    },
  },
  components: {
  },
  setup() {
    // 控制弹窗显示
    const dialogVisible = ref(false)
    const tableData = ref([])
    const total = ref(0)
    const queryParams = reactive({
      current: 1,
      size: 10
    })

    // 重置queryParams
    const resetQueryParams = () => {
      queryParams.current = 1
      queryParams.size = 10
    }

    // 显示弹窗
    const showDialog = () => {
      dialogVisible.value = true
    }

    // 关闭弹窗
    const handleBeforeClose = () => {
      dialogVisible.value = false
    }

    // 初始化数据
    const initData = () => {
      tableData.value = []
      total.value = 0
      resetQueryParams()
    }

    // 选择文件
    const httpRequest = (e: Event) => {
      console.log(e.type);

      // initData()
      // const file = e.file // 文件信息
      // if (!file) {
      //   // 没有文件
      //   return false
      // } else if (!/\.(xls|xlsx)$/.test(file.name.toLowerCase())) {
      //   // 格式根据自己需求定义
      //   this.$message.error('上传格式不正确，请上传xls或者xlsx格式')
      //   return false
      // }

      // const fileReader = new FileReader()
      // fileReader.onload = (ev) => {
      //   try {
      //     const data = ev.target.result
      //     const workbook = XLSX.read(data, {
      //       type: 'binary' // 以字符编码的方式解析
      //     })
      //     const exlname = this.sheetName || workbook.SheetNames[0] // 根据传人的表名读取，否则读第一张
      //     const exl = XLSX.utils.sheet_to_json(workbook.Sheets[exlname], { defval: '' }) // 生成json表格内容
      //     if (!exl) {
      //       this.$message.error('未找到对应表格，请重新上传！')
      //       return false
      //     }
      //     // 将 JSON 数据挂到 data 里
      //     this.dbData = this.formatDbData(exl)
      //     this.loadData()
      //     this.total = this.dbData.length
      //     // document.getElementsByName('file')[0].value = '' // 根据自己需求，可重置上传value为空，允许重复上传同一文件
      //   } catch (e) {
      //     Message({
      //       showClose: true,
      //       message: e.message,
      //       type: 'error'
      //     })
      //     console.log('出错了', e.message)
      //     this.initData()
      //     return false
      //   }
      // }
      // fileReader.readAsBinaryString(file)
    }

    // 取消上传
    const handleCancel = () => { }

    // 确认上传
    const handleConfirm = () => { }
    return {
      dialogVisible,
      showDialog,
      handleBeforeClose,
      httpRequest,
      total,
      handleCancel,
      handleConfirm
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
