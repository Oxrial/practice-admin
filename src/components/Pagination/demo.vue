<template>
	<el-card>
		<Pagination
			v-bind="page.config"
			:total="25"
			@current-change="(val) => (page.config.currentPage = val)"
			@size-change="
				(val) => {
					page.config.pageSize = val
					page.config.currentPage = 1
				}
			"
		/>
	</el-card>
</template>

<script setup>
import Pagination from './index.vue'
const page = reactive({
	config: {
		layout: 'total,prev, pager, next, sizes',
		pageSize: 10,
		currentPage: 1
	}
})
onMounted(() => {})
</script>
<style scoped></style>
<!-- :layout="config.layout" :pager-count="config.pagerCount"
:page-sizes="config.pageSizes" :page-size="config.pageSize"
:total="config.total" :current-page="config.currentPage" -->
