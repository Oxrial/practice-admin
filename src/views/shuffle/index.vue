<template>
	<h2>SHUFFLE</h2>
	<el-button @click="() => (list = shuffle(list))">RANDOM</el-button>
	<transition-group move-class="wraps-move" class="wraps" tag="div">
		<div class="wraps-item" v-for="numb in list" :key="numb.id">
			{{ numb.num }}
		</div>
	</transition-group>
</template>

<script setup lang="ts">
import { shuffle } from 'lodash-es'
// 声明出的数组为empty值，无填充
// const arr = new Array(81)
// console.log('arr', arr)

// 声明出的数组填充了undefined值，此处必须为数组，假定断言是一个number数组
const aarr = Array.apply(null, { length: 81 } as number[])
// console.log('aarr', aarr)

const list = ref(
	aarr.map((_, index) => {
		return {
			id: index,
			num: (index % 9) + 1
		}
	})
)
onMounted(() => {})
</script>
<style scoped lang="scss">
.wraps {
	display: flex;
	flex-wrap: wrap;
	width: calc(25px * 9 + 18px);
	margin: 0 auto;
	.wraps-item {
		width: 25px;
		height: 25px;
		color: #fff;
		background: rgb(154, 167, 240);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 15px;
	}
}
.wraps-move {
	transition: all 1s ease;
}
</style>
