import BatchImport from './src/index.vue'

BatchImport.install = app => {
  app.component(BatchImport.name, BatchImport)
}

export default BatchImport