import CategoryCascader from './src/index.vue'

CategoryCascader.install = app => {
  app.component(CategoryCascader.name, CategoryCascader)
}

export default CategoryCascader