<template>
	{{ parValue || '-' }}
	<div>
		A
		<div>B</div>
		<div>C</div>
	</div>
	<el-button @click="toArray(preValue)"> CLICK </el-button>
</template>

<script setup lang="ts">
const parValue = ref<any>(null)
const preValue = ref<any>(null)
const toArray = (f: any) => {
	try {
		parValue.value = Array.prototype.slice.call(f)
		parValue.value.forEach((item: any) => {
			item = item.style
			console.log(item)
		})
	} catch (e) {
		console.log(e)
		const arr = []
		for (let i = 0, len = f.length; i < len; i++) {
			arr[i] = f[i] //据说这样比push快
		}
		parValue.value = arr
	}
	console.log(parValue.value)
}
onMounted(() => {
	preValue.value = document.querySelectorAll('.el-main div')
})
</script>

<style scoped lang="scss"></style>
