<template>
	<h1>A</h1>
	<el-button @click="transB">传值到B</el-button>
</template>

<script setup lang="ts">
import Bus from '@/utils/Bus'
let flag = false
const transB = () => {
	flag = !flag
	Bus.emit('on-click', flag)
}
</script>

<style scoped lang="scss"></style>
