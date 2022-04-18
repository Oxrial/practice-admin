<template>
	<div class="error-main">
		<div class="content">
			<span>404 ... </span>
			<el-button class="back-home" @click="backHome">首页</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const backHome = () => {
	router.push('/')
}
</script>

<style scoped lang="scss">
.error-main {
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	.content {
		width: 50vw;
		font-size: 200px;
		font-weight: bold;
	}
	.back-home {
		display: block;
	}
}
</style>
