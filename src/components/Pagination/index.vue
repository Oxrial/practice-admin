<template>
	<el-pagination
		background
		v-bind="$attrs"
		@size-change="sizeChange"
		@current-change="currentChange"
	/>
</template>

<script setup>
const props = defineProps({
	config: {
		type: Object,
		default: () => {
			return {
				layout: {
					type: String,
					default: 'total,prev, pager, next, sizes, jumper'
				},
				pagerCount: { type: Number, default: 5 },
				pageSizes: { type: Array, default: () => [10, 20, 30, 40, 50, 100] },
				pageSize: { type: Number, default: 0 },
				total: { type: Number, default: 0 },
				currentPage: { type: Number, default: 1 }
			}
		}
	}
})

const emit = defineEmits(['current-change', 'size-change'])
const sizeChange = (val) => {
	emit('size-change', val)
}
const currentChange = (val) => {
	emit('current-change', val)
}
</script>
<style></style>
