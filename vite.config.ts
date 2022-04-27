import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {
	createStyleImportPlugin,
	VxeTableResolve
} from 'vite-plugin-style-import'
import autoImport from 'unplugin-auto-import/vite'
import setupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [
		vue(),
		vueJsx(),
		createStyleImportPlugin({
			resolves: [VxeTableResolve()]
		}),
		autoImport({
			imports: 'vue',
			dts: 'src/auto-import.d.ts'
		}),
		setupExtend()
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	server: {
		port: 9009,
		open: true
	}
})
