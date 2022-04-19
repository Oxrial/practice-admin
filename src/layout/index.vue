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
				<div class="home-main">
					<router-view v-slot="{ Component, route }">
						<keep-alive>
							<component :is="Component" :key="route.fullPath" />
						</keep-alive>
					</router-view>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import Menu from './components/Menu/index.vue'
import Header from './components/Header/index.vue'

const isCollapse = ref(false)
</script>
<style scoped lang="scss">
@import './index.scss';

.home-main {
	margin: 20px;
}
</style>
