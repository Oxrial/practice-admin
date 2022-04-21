<template>
	<h1>B</h1>
	<h3>{{ flag }}</h3>
</template>

<script setup lang="ts">
import Bus from '@/utils/Bus'
import { ref } from 'vue'

let flag = ref(false)
Bus.on('on-click', (val: boolean) => {
	flag.value = val
})
</script>

<style scoped lang="scss"></style>
