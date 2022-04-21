import { useWindowTabsStore } from '@/store'
import {
	createRouter,
	createWebHistory,
	NavigationGuardNext,
	RouteLocationNormalized,
	RouteLocationNormalizedLoaded,
	RouteRecordRaw
} from 'vue-router'
import Layout from '@/layout/index.vue'
import { storeToRefs } from 'pinia'
import { Ref } from 'vue'
const open = (tabs: Ref, fullPath: string, name: string) => {
	const instance = window.open(fullPath, name) as Window
	tabs.value.push({ instance, name })
}
export const routesObj: Array<RouteRecordRaw> = [
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
		path: '/',
		redirect: '/home',
		meta: { notLayout: true }
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/home/index.vue'),
		meta: { title: '首页', icon: 'el-icon-house' }
	},
	// 在菜单展示按钮，仅重定向用，无需next()放行
	{
		path: '/new',
		name: 'New',
		component: () => import('@/views/index.vue'),
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
	// 新窗口路由
	{
		path: '/new/index',
		name: 'NewIndex',
		component: () => import('@/views/new-tab/index.vue'),
		meta: { notLayout: true, title: '新标签', icon: 'el-icon-house' }
	},
	{
		path: '/test',
		name: 'Test',
		meta: { title: '测试', icon: 'el-icon-eleme' },
		component: () => import('@/views/index.vue'),
		children: [
			{
				path: 'shuffle',
				name: 'TestShuffle',
				component: () => import('@/views/shuffle/index.vue'),
				meta: { title: '随机', icon: 'el-icon-eleme' }
			},
			{
				path: 'curry',
				name: 'TestCurry',
				component: () => import('@/views/curry-function/index.vue'),
				meta: { title: '柯里化', icon: 'el-icon-eleme' }
			},
			{
				path: 'bus',
				name: 'TestBus',
				component: () => import('@/views/bus-demo/index.vue'),
				meta: { title: '公共串行BUS', icon: 'el-icon-eleme' }
			},
			{
				path: 'pinia',
				name: 'TestPinia',
				component: () => import('@/views/pinia-demo/index.vue'),
				meta: { title: 'Pinia', icon: 'el-icon-eleme' }
			}
		]
	},
	{
		path: '/components',
		name: 'Components',
		meta: { title: '组件', icon: 'el-icon-eleme' },
		component: () => import('@/views/index.vue'),
		children: [
			{
				path: 'pagination',
				name: 'ComponentsPagination',
				component: () => import('@/components/Pagination/demo.vue'),
				meta: { title: '分页', icon: 'el-icon-documentcopy' }
			}
		]
	}
]
const routes: Array<RouteRecordRaw> = []
const itemObj: RouteRecordRaw = {
	path: '',
	redirect: '/home',
	component: Layout,
	children: []
}
routesObj.forEach((item: RouteRecordRaw) => {
	if (!item.meta?.notLayout) {
		if (item.children) {
			item.redirect = item.path + '/' + item.children[0].path
		}
		itemObj.children!.push(item as RouteRecordRaw)
	} else {
		routes.push(item as RouteRecordRaw)
	}
})
routes.push(itemObj as RouteRecordRaw)

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})
export default router
