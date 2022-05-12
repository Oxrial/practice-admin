<template>
	<vxe-grid v-bind="vxeState" v-on="gridEvents">
		<template #form>
			<Form :model="model" :options="options" search>
				<template #opration="{ model, form }">
					<el-button @click="submit(form, model)">submit</el-button>
					<el-button @click="reset(form)">reset</el-button>
				</template>
			</Form>
			<el-button @click="enn">enn</el-button>
		</template>
		<template #operation="{ row }">
			<vxe-button
				@click="edit(row)"
				status="primary"
				content="查询"
			></vxe-button>
		</template>
	</vxe-grid>
</template>

<script setup lang="ts">
import { VxeGridProps, VxeGridListeners } from 'vxe-table'
import Form from '@/components/Form/index.vue'
import { FormOptions } from '@/components/Form/types'
import { ElMessage, FormInstance } from 'element-plus'
type TForm = {
	[key: string]: any
}
const model: TForm = reactive({
	name: '',
	age: '',
	sex: '',
	project: [],
	ethnic: ''
})
const options: FormOptions[] = reactive([
	{
		type: 'input',
		label: '名字',
		prop: 'name',
		rules: [{ required: true, message: '请输入名字', trigger: 'blur' }]
	},
	{ type: 'input', value: '', label: '年龄', prop: 'age' },
	{
		type: 'select',
		label: '性别',
		prop: 'sex',
		attrs: {
			style: {}
		},
		children: [
			{ type: 'option', label: '女', value: '0' },
			{ type: 'option', label: '男', value: '1' }
		]
	},
	{
		type: 'checkbox-group',
		label: '学科',
		prop: 'project',
		children: [
			{ type: 'checkbox', label: '经济' },
			{ type: 'checkbox', label: '法律' }
		]
	},
	{
		type: 'radio-group',
		label: '民族',
		prop: 'ethnic',
		children: [
			{ type: 'radio', label: '汉' },
			{ type: 'radio', label: '少数' }
		]
	}
])
const enn = () => {
	const obj = {
		name: 'AAA',
		age: '12',
		sex: '0',
		project: ['经济'],
		ethnic: '汉'
	}
	for (const key in obj) {
		key in model && (model[key] = obj[key as keyof typeof obj])
	}
}

const submit = (form: FormInstance, model: any) => {
	form.validate((valid) => {
		if (valid) {
			ElMessage.success(JSON.stringify(model))
		} else {
			ElMessage.error('校验异常，请检查')
		}
	})
}
const reset = (form: FormInstance) => {
	form.resetFields()
}
const vxeState = reactive<VxeGridProps>({
	border: true,
	showOverflow: true,
	loading: false,
	// exportConfig: {},
	columnConfig: {
		resizable: true
	},
	id: 'full_edit_1',
	size: 'mini',
	rowId: 'id',
	customConfig: {
		storage: true
	},
	toolbarConfig: {
		// export: true,
		zoom: true,
		custom: true
	},
	columns: [
		{ type: 'seq', width: 60 },
		{ type: 'checkbox', width: 60 },
		{ field: 'name', title: 'Name' },
		{ field: 'nickname', title: 'Nickname' },
		{ field: 'age', title: 'Age' },
		{
			field: 'sex',
			title: 'Sex',
			filters: [
				{ label: '男', value: '1' },
				{ label: '女', value: '0' }
			]
		},
		{ field: 'address', title: 'Address', showOverflow: true },
		{
			title: '操作',
			width: 120,
			slots: { default: 'operation' },
			fixed: 'right'
		}
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
				sex: '0',
				age: 23,
				address: 'Shenzhen'
			},
			{
				id: 10005,
				name: 'Test5',
				nickname: 'T5',
				role: 'Develop',
				sex: '0',
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

const edit = (row: any) => {
	for (const key in row) {
		key in model && (model[key] = row[key as keyof typeof row])
	}
}
</script>

<style scoped lang="scss">
.vxe-grid {
	:deep(.vxe-table--body-wrapper.body--wrapper) {
		height: calc(100vh - 330px);
		background-color: #fff;
	}
	:deep(.vxe-toolbar .vxe-custom--wrapper) {
		margin-right: 0.8em;
	}
}
</style>
