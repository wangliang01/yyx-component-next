// 引入样式
import './styles/index.scss'
import Button from './Button'
import BatchImport from './BatchImport'
import Input from './Input'

const install = (app) => {
  app.component(Button.name, Button)
  app.component(BatchImport.name, BatchImport)
  app.component(Input.name, Input)
}

export default {
  install,
  Button,
  BatchImport,
  Input
}