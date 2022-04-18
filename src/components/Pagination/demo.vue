<template>
	<Pagination
		v-bind="page.config"
		layout="'total,prev, pager, next, sizes'"
		:config="page.config"
		@current-change="(val) => (page.config.currentPage = val)"
	></Pagination>
</template>

<script setup>
import Pagination from './index.vue'
const page = reactive({
	config: {
		pageSize: 10,
		total: 20,
		currentPage: 1
	}
})
onMounted(() => {})
</script>
<style scoped></style>
<!-- :layout="config.layout" :pager-count="config.pagerCount"
:page-sizes="config.pageSizes" :page-size="config.pageSize"
:total="config.total" :current-page="config.currentPage" -->
