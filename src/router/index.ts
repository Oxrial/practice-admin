import {
	createRouter,
	createWebHistory,
	NavigationGuardNext,
	RouteLocationNormalized,
	RouteLocationNormalizedLoaded,
	RouteRecordRaw
} from 'vue-router'

import Layout from '@/layout/index.vue'
import { useWindowTabsStore } from '@/store'
import { storeToRefs } from 'pinia'
import { Ref } from 'vue'
import { capitalize } from 'lodash-es'
const open = (tabs: Ref, fullPath: string, name: string) => {
	const instance = window.open(fullPath, name) as Window
	tabs.value.push({ instance, name })
}
export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/login',
		meta: { notLayout: true }
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/404',
		meta: { notLayout: true }
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@/views/error.vue'),
		meta: { notLayout: true }
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login/index.vue'),
		meta: { notLayout: true }
	},
	// 新窗口路由
	{
		path: '/new/index',
		name: 'NewIndex',
		component: () => import('@/views/new-tab/index.vue'),
		meta: { notLayout: true, title: '新标签', icon: 'el-icon-house' }
	},
	{
		path: '/home',
		component: Layout,
		redirect: '/home/index',
		meta: { title: '首页', icon: 'el-icon-house' },
		children: [
			{
				path: 'index',
				component: () => import('@/views/home/index.vue')
			}
		]
	},
	// 在菜单展示按钮，仅重定向用，无需next()放行
	{
		path: '/new',
		component: Layout,
		meta: { title: '新标签', icon: 'el-icon-eleme' },
		beforeEnter: (
			to: RouteLocationNormalized,
			from: RouteLocationNormalizedLoaded,
			next: NavigationGuardNext
		) => {
			// pinia windowtab实例
			const windowTab = useWindowTabsStore()
			// 拼接新标签全路径
			const fullPath = to.fullPath + '/index'
			// 新标签页name：window窗口实例名，pinia存储依据
			const name = (to.fullPath.substring(1) + 'index').toUpperCase()
			// 根据name查找pinia实例中是否存在相关数据
			const windowInstance = windowTab.getWinTabByName(name)
			// 解构pinia实例
			const { tabs } = storeToRefs(windowTab)
			// pinia中存在数据
			if (windowInstance) {
				// pinia获取的window实例状态为非关闭状态，则聚焦
				if (!windowInstance.instance.closed) {
					windowInstance.instance.focus()
				} else {
					// pinia获取的window实例状态为关闭状态，清除pinia该条数据
					tabs.value.splice(
						tabs.value.findIndex((item) => (item!.name = windowInstance.name)),
						1
					)
					// 重新新开窗口
					open(tabs, fullPath, name)
				}
			} else {
				// 新开窗口
				open(tabs, fullPath, name)
			}
			// 不作路由跳转，保持原路由
			next(from.fullPath)
		}
	},
	{
		path: '/test',
		meta: { type: 'sub', title: '测试', icon: 'el-icon-eleme' },
		component: Layout,
		children: [
			{
				path: 'shuffle',
				component: () => import('@/views/shuffle/index.vue'),
				meta: { title: '随机', icon: 'el-icon-eleme' }
			},
			{
				path: 'curry',
				component: () => import('@/views/curry-function/index.vue'),
				meta: { title: '柯里化', icon: 'el-icon-eleme' }
			},
			{
				path: 'bus',
				component: () => import('@/views/bus-demo/index.vue'),
				meta: { title: '公共串行BUS', icon: 'el-icon-eleme' }
			},
			{
				path: 'pinia',
				component: () => import('@/views/pinia-demo/index.vue'),
				meta: { title: 'Pinia', icon: 'el-icon-eleme' }
			}
		]
	},
	{
		path: '/components',
		meta: { type: 'sub', title: '组件', icon: 'el-icon-eleme' },
		component: Layout,
		children: [
			{
				path: 'pagination',
				component: () => import('@/components/Pagination/demo.vue'),
				meta: { title: '分页', icon: 'el-icon-documentcopy' }
			}
		]
	}
]
const recursionRoutesArr = (
	routesArrTemp: Array<RouteRecordRaw>,
	parentsPath: string = ''
) => {
	routesArrTemp.forEach((item: RouteRecordRaw) => {
		if (!item.meta?.notLayout) {
			item.name =
				capitalize(parentsPath.substring(parentsPath.indexOf('/') + 1)) +
				capitalize(item.path.substring(item.path.indexOf('/') + 1))
			if (item.children) {
				recursionRoutesArr(item.children, item.path)
			}
		}
	})
}
recursionRoutesArr(routes)

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})
export default router
