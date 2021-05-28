// 引入样式
import './styles/index.scss'
import Button from './Button'
import BatchImport from './BatchImport'
import Input from './Input'
import AddressCascader from './AddressCascader'

const install = (app) => {
  app.component(Button.name, Button)
  app.component(BatchImport.name, BatchImport)
  app.component(Input.name, Input)
  app.component(AddressCascader.name, AddressCascader)
}

export default {
  install,
  Button,
  BatchImport,
  Input,
  AddressCascader
}