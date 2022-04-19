<template>
	<el-icon class="collpase-btn" @click="clickCollapse">
		<el-icon-expand v-if="isCollapse" />
		<el-icon-fold v-else />
	</el-icon>
	<BreadCrumb :matched="route.matched"></BreadCrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BreadCrumb from './Breadcrumb/index.vue'
const props = defineProps({
	isCollapse: {
		type: Boolean,
		default: false
	}
})
const $route = useRoute()
const route = computed(() => {
	return $route
})

const emits = defineEmits(['update:isCollapse'])
const clickCollapse = () => {
	emits('update:isCollapse', !props.isCollapse)
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
