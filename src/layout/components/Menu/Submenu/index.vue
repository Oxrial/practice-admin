<template>
	<template v-for="menu in menuData">
		<template v-if="!menu.meta?.notLayout">
			<template v-if="menu.meta?.type === 'sub'">
				<el-sub-menu
					:index="(parentsPath ? parentsPath + '/' : '') + menu.path"
				>
					<template #title>
						<menu-title :menu="menu" />
					</template>
					<sub-menu
						:menu-data="menu.children"
						:parents-path="(parentsPath ? parentsPath + '/' : '') + menu.path"
					/>
				</el-sub-menu>
			</template>
			<template v-else>
				<el-menu-item
					:index="
						(parentsPath ? parentsPath + '/' : '') +
						menu.path +
						(menu.children ? '/' + menu.children[0].path : '')
					"
				>
					<menu-title :menu="menu" />
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
