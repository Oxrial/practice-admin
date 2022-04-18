<template>
	<el-container>
		<el-aside width="auto" height="100vh">
			<Menu :is-collapse="isCollapse" />
		</el-aside>
		<el-container>
			<el-header>
				<Header v-model:is-collapse="isCollapse" />
			</el-header>
			<el-main>
				<router-view />
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'

const isCollapse = ref(false)
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
