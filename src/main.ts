import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { createPinia } from 'pinia'
import * as Icons from '@element-plus/icons-vue'
import { hump2Bar } from './utils'
const app = createApp(App)
// 使图标像普通svg图片使用，全局注册为组件形式
for (const icon in Icons) {
	app.component(`el-icon-${hump2Bar(icon)}`, (Icons as any)[icon])
}
app.use(router).use(ElementPlus).use(createPinia()).mount('#app')
