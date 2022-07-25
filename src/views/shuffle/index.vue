<template>
	<el-card>
		<h2>五十音 PRACTISE</h2>
	</el-card>
	<wu-shi-yin :yin50="qingyin50" yin-type="qing"></wu-shi-yin>
	<wu-shi-yin :yin50="zhuoyin50" yin-type="zhuo"></wu-shi-yin>
	<wu-shi-yin :yin50="aoyin50" yin-type="ao"></wu-shi-yin>
</template>

<script setup lang="ts">
import qing_yin50 from './qing'
import zhuo_yin50 from './zhuo'
import ao_yin50 from './ao'
import WuShiYin from './components/index.vue'

const qingyin50 = ref(qing_yin50)
const zhuoyin50 = ref(zhuo_yin50)
const aoyin50 = ref(ao_yin50)
// 声明出的数组为empty值，无填充
// const arr = new Array(81)
// console.log('arr', arr)

// 声明出的数组填充了undefined值，此处必须为数组，假定断言是一个number数组

// const aarr = Array.apply(null, { length: 81 } as number[])
// // console.log('aarr', aarr)

// const list = ref(
// 	aarr.map((_, index) => {
// 		return {
// 			id: index,
// 			num: (index % 9) + 1
// 		}
// 	})
// )
</script>
<style scoped lang="scss">
.el-card {
	margin-bottom: 20px;
}
</style>
