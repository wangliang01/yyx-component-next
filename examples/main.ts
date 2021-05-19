import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import yui from '../dist/yui.es'
import 'element-plus/lib/theme-chalk/index.css'
// 引入iconfont
import './assets/font/iconfont.css'
// 引入router
import router from './router'

const app = createApp(App)
app.use(router)
app.use(ElementUI)
app.use(yui)
app.mount('#app')
