import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {
	createStyleImportPlugin,
	VxeTableResolve
} from 'vite-plugin-style-import'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'
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
		AutoImport({
			imports: 'vue',
			dts: 'src/auto-import.d.ts',
      resolvers: [ElementPlusResolver()]
		}),
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\?vue/, /\.tsx$/],
      exclude: ['./components/Pagination/demo.vue'],
      dts: 'src/components.d.ts',
      resolvers: [ElementPlusResolver()]
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
		open: false
	}
})
