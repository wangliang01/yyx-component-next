import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import yui from '../dist/yui.es'
import 'element-plus/lib/theme-chalk/index.css';

console.log('yui', yui);

const app = createApp(App)
app.use(ElementUI)
app.use(yui)
app.mount('#app')
