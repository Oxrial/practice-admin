<template>
	<el-card>
		<BusA></BusA>
		<BusB></BusB>
	</el-card>
</template>

<script setup>
import { ref, provide } from 'vue'
import BusB from '@/components/BusB/index.vue'
import BusA from '@/components/BusA/index.vue'
// 供给静态值
provide('vStatic', 'static_value')

// 供给响应式的值
const ref_value = ref(0)
provide('vRef', ref_value)
</script>

<style scoped lang="scss"></style>
