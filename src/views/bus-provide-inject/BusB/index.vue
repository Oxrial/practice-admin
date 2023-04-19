<template>
	<h1>B</h1>
	<h3>{{ flag }}</h3>
	<h3>vStatic：{{ vStatic }} | vRef：{{ vRef }}</h3>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Bus from '@/utils/Bus'
import { ref } from 'vue'

let flag = ref(false)
Bus.on('on-click', (val: boolean) => {
	flag.value = val
})

const vStatic = inject('vStatic')
const vRef = inject('vRef')
</script>

<style scoped lang="scss"></style>
