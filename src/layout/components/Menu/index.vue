<template>
	<div class="logo-main">
		<transition name="logoTransition" :appear="true">
			<el-image
				v-if="!isCollapse"
				:src="logo"
				fit="contain"
				class="project-logo"
			/>
			<el-image v-else :src="logo2" fit="contain" class="project-logo" />
		</transition>
	</div>
	<el-scrollbar class="submenu-main">
		<el-menu
			router
			:collapse="isCollapse"
			:default-active="defaultActive"
			:background-color="scss.aside_theme"
			text-color="#fefefea6"
			class="el-menu-vertical-demo"
		>
			<sub-menu :menu-data="(routes as any[])" />
		</el-menu>
	</el-scrollbar>
</template>

<script setup lang="ts">
import logo from '@/assets/logo-cool.jpg'
import logo2 from '@/assets/logo.png'
import subMenu from './Submenu/index.vue'
import { useRouter,useRoute } from 'vue-router'
// import { routesObj } from '@/router'
import scss from '@/assets/style.module.scss'

const props = defineProps({
	isCollapse: {
		type: Boolean,
		default: false
	}
})
const $routes = useRouter()
const routes = computed(() => {
	return $routes.options.routes
})

const $route = useRoute()
const route = computed(() => {
	return $route
})
const defaultActive = ref<string>(route.value.path)
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
