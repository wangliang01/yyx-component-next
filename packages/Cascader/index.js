import Cascader from './src/index.vue'

Cascader.install = app => {
  app.component(Cascader.name, Cascader)
}

export default Cascader