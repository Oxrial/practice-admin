<template>
	<template v-for="menu in menuData">
		<template v-if="!menu.meta?.notLayout">
			<template v-if="menu.children?.length">
				<el-sub-menu
					:index="(parentsPath ? parentsPath + '/' : '') + menu.path"
				>
					<template #title>
						<menu-title :menu="menu"></menu-title>
					</template>
					<sub-menu
						:menu-data="menu.children"
						:parents-path="(parentsPath ? parentsPath + '/' : '') + menu.path"
					></sub-menu>
				</el-sub-menu>
			</template>
			<template v-else>
				<el-menu-item
					:index="(parentsPath ? parentsPath + '/' : '') + menu.path"
				>
					<menu-title :menu="menu"></menu-title>
					<!-- <el-icon><component :is="menu.meta?.icon" /></el-icon>
					<span>{{ menu.meta?.title }}</span> -->
				</el-menu-item>
			</template>
		</template>
	</template>
</template>

<script setup lang="ts" name="subMenu">
import menuTitle from './index'
type Prop = {
	menuData: Array<any>
	parentsPath?: string
}
const props = defineProps<Prop>()
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
