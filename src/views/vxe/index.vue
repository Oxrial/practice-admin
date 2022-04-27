<template>
	<vxe-grid v-bind="vxeState" v-on="gridEvents">
		<template #form> <Form :options="options" search></Form> </template>
		<!-- <template #operate_item>
			<vxe-button type="submit" status="primary" content="查询"></vxe-button>
			<vxe-button type="reset" content="重置"></vxe-button>
		</template> -->
	</vxe-grid>
</template>

<script setup lang="ts">
import { VxeGridProps, VxeGridListeners } from 'vxe-table'

import Form from '@/components/Form/index.vue'
import { FormOption } from '@/components/Form/types'
const options: FormOption[] = reactive([
	{ type: 'input', value: '', label: '名字', prop: 'name' },
	{ type: 'input', value: '', label: '性别', prop: 'sex' },
	{ type: 'input', value: '', label: '性别', prop: 'sex' },
	{ type: 'input', value: '', label: '性别', prop: 'sex' },
	{ type: 'input', value: '', label: '性别', prop: 'sex' },
	{ type: 'input', value: '', label: '性别', prop: 'sex' },
	{ type: 'input', value: '', label: '性别', prop: 'sex' },
	{ type: 'input', value: '', label: '性别', prop: 'sex' },
	{ type: 'input', value: '', label: '性别', prop: 'sex' }
])
const vxeState = reactive<VxeGridProps>({
	border: true,
	showOverflow: true,
	loading: false,
	height: 300,
	// exportConfig: {},
	columnConfig: {
		resizable: true
	},
	toolbarConfig: {
		// export: true,
		custom: true
	},
	columns: [
		{ type: 'seq', width: 60 },
		{ type: 'checkbox', width: 60 },
		{ field: 'name', title: 'Name' },
		{ field: 'nickname', title: 'Nickname' },
		{ field: 'age', title: 'Age' },
		{ field: 'sex', title: 'Sex' },
		{ field: 'address', title: 'Address', showOverflow: true }
	],
	data: []
})
const findList = () => {
	vxeState.loading = true
	setTimeout(() => {
		vxeState.data = [
			{
				id: 10001,
				name: 'Test1',
				nickname: 'T1',
				role: 'Develop',
				sex: '1',
				age: 28,
				address: 'Shenzhen'
			},
			{
				id: 10002,
				name: 'Test2',
				nickname: 'T2',
				role: 'Test',
				sex: '0',
				age: 22,
				address: 'Guangzhou'
			},
			{
				id: 10003,
				name: 'Test3',
				nickname: 'T3',
				role: 'PM',
				sex: '1',
				age: 32,
				address: 'Shanghai'
			},
			{
				id: 10004,
				name: 'Test4',
				nickname: 'T4',
				role: 'Designer',
				sex: '0 ',
				age: 23,
				address: 'Shenzhen'
			},
			{
				id: 10005,
				name: 'Test5',
				nickname: 'T5',
				role: 'Develop',
				sex: '0 ',
				age: 30,
				address: 'Shanghai'
			}
		]
		vxeState.loading = false
	}, 500)
}
const gridEvents: VxeGridListeners = {
	formSubmit() {
		findList()
	}
}
const sexList1 = ref<any[]>([])

// 异步更新下拉选项
setTimeout(() => {
	sexList1.value = [
		{ value: '1', label: '男' },
		{ value: '0', label: '女' }
	]
}, 200)
onMounted(() => {
	findList()
})
</script>

<style scoped lang="scss"></style>
