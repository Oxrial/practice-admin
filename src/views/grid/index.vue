<template>
	<el-card>
		<el-table
			class="grid-table"
			:height="300"
			:data="state.data"
			border
			stripe
			@cell-click="cc"
		>
			<el-table-column prop="year" label="类型" width="150" align="center">
				<el-table-column
					prop="year"
					label="序号"
					align="center"
					width="150"
				></el-table-column>
			</el-table-column>
			<el-table-column
				prop="fenopda"
				label="重量"
				align="center"
			></el-table-column>
			<el-table-column
				prop="dwaiod"
				label="长度"
				align="center"
			></el-table-column>
			<el-table-column
				prop="date"
				label="时间"
				align="center"
			></el-table-column>
			<el-table-column
				prop="name"
				label="负责人"
				align="center"
			></el-table-column>
			<el-table-column
				prop="province"
				label="产地"
				align="center"
			></el-table-column>
		</el-table>
	</el-card>
	<BaseTable
		class="grid-table"
		:data="state.data"
		:columns="state.columns"
		:page-obj="state.pageObj"
		table-size="medium"
		:height="300"
		title="aaa"
	>
		<template #slash>
			<el-table-column prop="year" label="类型">
				<el-table-column prop="year" label="序号"></el-table-column>
			</el-table-column>
		</template>
	</BaseTable>
</template>

<script setup>
import BaseTable from '@/components/BaseTable/index.vue'
const state = reactive({
	columns: [
		{
			slot: 'slash'
		},
		{
			label: '重量',
			prop: 'fenopda'
		},
		{
			label: '长度',
			prop: 'dwaiod'
		},
		{
			label: '负责人',
			prop: 'name'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		},
		{
			label: '产地',
			prop: 'province'
		}
	],
	data: [
		{
			date: '2016-05-03',
			name: '王小虎',
			province: '上海',
			city: '普陀区',
			address: '上海市普陀区金沙江路',
			zip: 200333,
			dwaiod: '154',
			fenopda: '89',
			year: '1'
		},
		{
			date: '2016-05-03',
			name: '王小虎',
			province: '上海',
			city: '普陀区',
			address: '上海市普陀区金沙江路',
			zip: 200333,
			dwaiod: '154',
			fenopda: '89',
			year: '2'
		},
		{
			date: '2016-05-03',
			name: '王小虎',
			province: '上海',
			city: '普陀区',
			address: '上海市普陀区金沙江路',
			zip: 200333,
			dwaiod: '154',
			fenopda: '89',
			year: '3'
		}
	],
	pageObj: {
		curPageNotFirst: false,
		total: 0,
		currentPage: 1,
		sizes: [20, 50, 100],
		size: 20,
		func: (currentPage) => {},
		sizeFunc: (size) => {}
	}
})
const cc = (a, b, c) => {
	console.log(a, b, c)
}
</script>

<style lang="scss">
.el-card {
	margin-bottom: 20px;
}
.grid-table {
	thead.is-group {
		th {
			height: 27.4px;
			background: none;
			padding: 0px;
		}
		tr:first-of-type th:first-of-type {
			border-bottom: none; /*中间的横线去掉*/
			&:before {
				content: '';
				position: absolute;
				width: 1px;
				height: 100px; /*斜线的长度*/
				top: 0;
				left: 0;
				background-color: grey;
				opacity: 0.2;
				display: block;
				transform: rotate(-43deg); /*调整斜线的角度*/
				transform: rotate(-70deg); /*调整斜线的角度*/
				-webkit-transform-origin: top;
				transform-origin: top;
			}
			div.cell {
				text-align: right; /*上边文字靠右*/
			}
		}
		tr:last-of-type th:first-of-type {
			&:before {
				content: '';
				position: absolute;
				width: 1px;
				height: 100px; /*斜线的长度*/
				bottom: 0;
				right: 0;
				background-color: grey;
				opacity: 0.2;
				display: block;
				transform: rotate(-45deg); /*调整斜线的角度*/
				transform: rotate(-70deg); /*调整斜线的角度*/
				-webkit-transform-origin: bottom;
				transform-origin: bottom;
			}
			div.cell {
				text-align: left; /*下边文字靠左*/
			}
		}
	}
}

/*::v-deep 这里主要的作用就是用来强制修改element默认的样式*/

/*核心代码*/
</style>
