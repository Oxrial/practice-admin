import { App, createApp } from 'vue'
import AppView from './App.vue'

import router from './router'

import 'normalize.css/normalize.css'

import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/theme-chalk/index.css'

import {
	VXETable,
	Header,
	Form,
	Input,
	Select,
	Option,
	Toolbar,
	Tooltip,
	Button,
	Table,
	Grid
} from 'vxe-table'
import XEUtils from 'xe-utils'
import zhCN from 'vxe-table/es/locale/lang/zh-CN'
import 'vxe-table/lib/style.css'

import { createPinia } from 'pinia'

import * as Icons from '@element-plus/icons-vue'
import { hump2Bar } from './utils'

const app = createApp(AppView)

VXETable.setup({
	i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
})
function useVxeTable(app: App) {
	app
		.use(Grid)
		.use(Header)
		.use(Form)
		.use(Input)
		.use(Select)
		.use(Option)
		.use(Toolbar)
		.use(Tooltip)
		.use(Button)
		.use(Table)
}

// 使图标像普通svg图片使用，全局注册为组件形式
for (const icon in Icons) {
	app.component(`el-icon-${hump2Bar(icon)}`, (Icons as any)[icon])
}

app
	.use(router)
	.use(ElementPlus, { locale })
	.use(useVxeTable)
	.use(createPinia())
	.mount('#app')
