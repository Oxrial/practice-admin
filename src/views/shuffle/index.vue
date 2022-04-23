<template>
	<el-card>
		<h2>SHUFFLE</h2>
		<el-button @click="() => (list = shuffle(list))">RANDOM</el-button>
		<transition-group move-class="wraps-move" class="wraps" tag="div">
			<div class="wraps-item" v-for="numb in list" :key="numb.id">
				{{ numb.num }}
			</div>
		</transition-group>
	</el-card>
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
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
