import AddressCascader from './src/index.vue'

AddressCascader.install = app => {
  app.component(AddressCascader.name, AddressCascader)
}

export default AddressCascader