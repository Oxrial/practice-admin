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
				<router-view v-slot="{ Component, route }">
					<!-- mode:  -->
					<!-- in-out：新元素先进行过渡，完成之后当前元素过渡离开。 -->
					<!-- out-in：当前元素先进行过渡，完成之后新元素过渡进入。 -->
					<!-- component key 唯一标识，动画区分不同的内容 -->
					<transition
						mode="out-in"
						enter-active-class="animate__animated animate__fadeIn"
					>
						<keep-alive>
							<div :key="route.fullPath">
								<component :is="Component" />
							</div>
						</keep-alive>
					</transition>
				</router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import 'animate.css'
import Menu from './components/Menu/index.vue'
import Header from './components/Header/index.vue'

const isCollapse = ref(false)
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
