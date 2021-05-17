import Button from './Button'

const install = (app) => {
  app.component(Button.name, Button)
}

export default {
  install,
  Button
}