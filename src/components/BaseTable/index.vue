<template>
	<el-card
		:class="{
			'symbol-table': true,
			'box-card': true,
			'border-unset': borderUnset
		}"
		shadow="never"
	>
		<div v-if="isShowHeader" slot="header" class="header">
			<slot name="header">
				<slot name="headertitle">
					<span
						:class="templateTitle ? '' : 'serprotitle'"
						:style="titleStyle"
						>{{ title }}</span
					>
				</slot>
				<div v-if="filterArea" class="header-right">
					<slot name="filter_area">
						<i
							v-if="isMaxWindow"
							class="el-icon-full-screen"
							style="cursor: pointer"
							@click="maxWindow"
						/>
						<i
							class="el-icon-search"
							style="margin-left: 5px"
							@click="searchFuncSelf"
						/>
						<i
							class="el-icon-refresh-left"
							style="margin-left: 5px"
							@click="refreshFunc"
						/>
					</slot>
				</div>
			</slot>
		</div>
		<slot name="filterForm" />
		<el-table
			ref="multipleTable"
			v-loading="loading"
			highlight-current-row
			style="width: 100%"
			:size="tableSize"
			:border="isShowBorder"
			:height="height"
			:stripe="false"
			:show-header="showHeader"
			:header-cell-style="headerCellStyle || {}"
			:row-key="rowKey"
			:expand-row-keys="expand"
			:cell-style="cellStyle || operationStyle"
			:data="
				frontPage
					? data.slice(
							(pageObj.currentPage - 1) * pageObj.size,
							pageObj.currentPage * pageObj.size
					  )
					: data
			"
			:row-class-name="rowClassNameFunc || (rowColorProp && rowClassName)"
			:cell-class-name="cellClassNameFunc || (cellColorProp && cellClassName)"
			:empty-text="loading ? ' ' : '无数据'"
			@row-dblclick="rowDblclick"
			@sort-change="sortChange"
			@selection-change="selectChange"
			@expand-change="expandChange"
		>
			<el-table-column v-if="index" type="index" width="45" />
			<slot name="expcolumn" />
			<el-table-column v-if="selection" type="selection" width="45" />
			<template v-for="col in columns">
				<slot v-if="col.slot" :name="col.slot" />
				<el-table-column
					v-else
					:key="col.prop"
					:show-overflow-tooltip="tooltip"
					:fixed="col.fixed"
					:prop="col.prop"
					:label="col.label"
					:width="col.width"
					:min-width="col.minWidth"
					:sortable="col.sortable"
				>
					<template v-slot="{ row }">
						<slot
							:name="col.prop"
							:value="row[col.prop]"
							:row="row"
							:enums="col.enums || {}"
						>
							<span :class="col.colorEnums && col.colorEnums[row[col.prop]]">
								{{
									col.enums
										? col.enums[row[col.prop]]
										: col.func
										? col.func(row[col.prop])
										: row[col.prop]
								}}
							</span>
						</slot>
					</template>
				</el-table-column>
			</template>
			<slot />
		</el-table>
		<div class="footer" style="display: flex">
			<el-pagination
				v-if="isPageObj"
				mini
				:layout="pageObj.layout || 'sizes,pager'"
				:current-page.sync="pageObj.currentPage"
				:page-size="pageObj.size"
				:page-sizes="pageObj.sizes || [10, 20, 30]"
				:pager-count="pageObj.pagerCount || 5"
				:total="frontPage ? data.length : pageObj.total"
				@size-change="pageObj.sizeFunc"
				@current-change="
					(curr) => {
						pageObj.func(curr)
						$refs.multipleTable.bodyWrapper.scrollTop = 0
					}
				"
			/>
			<slot name="pager" />
		</div>
		<el-dialog
			v-if="hasSearchDialog"
			:title="dialogTitle"
			:visible.sync="searchDialog"
			:append-to-body="appendToBody"
			:before-close="beforeClose"
			width="40%"
		>
			<slot name="dialog" />
			<span slot="footer">
				<el-button @click="beforeClose">取 消</el-button>
				<el-button type="primary" @click="sure">确 定</el-button>
			</span>
		</el-dialog>
	</el-card>
</template>

<script>
export default {
	props: {
		hasSearchDialog: {
			type: Boolean,
			default: false
		},
		index: {
			type: Boolean,
			default: false
		},
		// 展开的行
		expand: {
			type: Array,
			default: () => []
		},
		// 行标识
		rowKey: {
			type: Function,
			default: () => {}
		},
		// 是否多选
		selection: {
			type: Boolean,
			default: false
		},
		// 是否展示头部
		isShowHeader: {
			type: Boolean,
			default: true
		},
		headerCellStyle: {
			type: [String, Function],
			default: () => {}
		},
		cellStyle: {
			type: [String, Function],
			default: () => {}
		},
		tableSize: {
			type: String,
			default: () => 'mini'
		},
		// 是否需要缩略
		tooltip: {
			type: Boolean,
			default: true
		},
		// 是否需要线条--true是;
		isShowBorder: {
			type: Boolean,
			default: true
		},
		// 是否需要前端分页--true是;
		frontPage: {
			type: Boolean,
			default: true
		},
		title: {
			type: String,
			default: () => ''
		},
		titleStyle: {
			type: Object,
			default: () => {}
		},
		templateTitle: {
			type: Boolean,
			default: true
		},
		filterArea: {
			type: Boolean,
			default: true
		},
		loading: {
			type: Boolean,
			default: false
		},
		data: {
			type: Array,
			default: () => []
		},
		columns: {
			type: Array,
			default: () => []
		},
		height: {
			type: Number,
			default: 420
		},
		stripe: {
			type: Boolean,
			default: true
		},
		showHeader: {
			type: Boolean,
			default: true
		},
		isPageObj: {
			type: Boolean,
			default: true
		},
		pageObj: {
			type: Object,
			default: () => {
				return {}
			}
		},
		dialogTitle: {
			type: String,
			default: () => '查询'
		},
		appendToBody: {
			type: Boolean,
			default: false
		},
		searchType: {
			type: String,
			default: () => 'input'
		},
		refreshFunc: {
			type: Function,
			default: () => () => {}
		},
		isMaxWindow: { type: Boolean, default: false },
		borderUnset: {
			type: Boolean,
			default: () => false
		},
		searchFunc: {
			type: Function,
			default: null
		},
		rowClassNameFunc: {
			type: Function,
			default: null
		},
		cellClassNameFunc: {
			type: Function,
			default: null
		},
		// 校验是否通过: 默认不通过
		isValidate: {
			type: Boolean,
			default: () => false
		},
		// 是否开启校验：默认不开启
		openValidate: {
			type: Boolean,
			default: () => false
		},
		rowColorProp: {
			type: String,
			default: () => ''
		},
		cellColorProp: {
			type: String,
			default: () => ''
		},
		// 默认颜色 绿 黄 红，若黄不存在则留null：['1', null, '2']
		colorKeys: {
			type: Array,
			default: () => ['1', '2', '3']
		}
	},
	data() {
		return {
			searchDialog: false,
			input: '',
			date: '',
			color: ['mose-normal', 'mose-warning', 'mose-danger'],
			colorEnums: {}
		}
	},
	mounted() {
		if (this.colorKeys) {
			this.colorKeys.forEach((item, index) => {
				item && (this.colorEnums[item] = this.color[index])
			})
		}
	},
	methods: {
		// 设置单元格样式
		operationStyle({ column }) {
			return ''
			// if(column.label === '操作'){
			//   return 'text-align: center'
			// }
		},
		expandChange(row, expandedRows) {
			this.$emit('expand-change', row, expandedRows)
		},
		selectChange(row) {
			this.$emit('selection-change', row)
		},
		beforeClose() {
			this.$emit('before-close')
			this.searchDialog = false
		},
		sortChange(obj) {
			this.$emit('sort-change', obj)
		},
		maxWindow() {
			this.$emit('max-window')
		},
		sure() {
			if (!this.openValidate) {
				this.searchDialog = false
				this.$emit('submit')
			} else {
				this.$emit('submit')
				this.$nextTick(() => {
					if (this.isValidate) {
						this.searchDialog = false
					}
				})
			}
		},
		searchFuncSelf() {
			this.searchFunc ? this.searchFunc() : this.showDialog()
		},
		showDialog() {
			this.searchDialog = true
		},
		// 当某一行被双击时会触发该事件
		rowDblclick(row) {
			this.$emit('row-dblclick', row)
		},
		rowClassName({ row, rowIndex }) {
			// 添加行序号
			row.index = rowIndex
			// 颜色枚举行记录
			return this.colorEnums[row[this.rowColorProp]]
		},
		cellClassName({ row, column, rowIndex, columnIndex }) {
			// 添加行序号
			row.index = rowIndex
			column === this.cellColorProp && this.colorEnums[row[this.rowColorProp]]
		},
		search() {
			if (this.input === '') return
			console.log('查询', this.input.trim())
			// this.$emit('search',this.input.trim())
			this.input = ''
		}
	}
}
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
