<template>
	<el-form
		ref="form"
		v-if="model"
		inline
		:class="
			formClass +
			((search && ' search-form') || (dialog && ' dialog-form') || '')
		"
		:validate-on-rule-change="false"
		:model="model"
		:rules="rules"
		v-bind="$attrs"
	>
		<template v-for="item in options" :key="item.prop">
			<el-form-item :label="item.label" :prop="item.prop" :class="'full'">
				<component
					v-if="!item.children || !item.children!.length"
					v-bind="item.attrs"
					v-model="model[item.prop!]"
					:is="`el-${item.type}`"
				>
				</component>
				<component
					v-else-if="item.children && item.children!.length"
					v-bind="item.attrs"
					v-model="model[item.prop!]"
					:is="`el-${item.type}`"
				>
					<component
						v-for="iitem in item.children"
						:is="`el-${iitem.type}`"
						:label="iitem.label"
						:value="iitem.value"
					></component>
				</component>
			</el-form-item>
		</template>
		<el-form-item :class="'full'">
			<slot name="opration" :model="model" :form="form"></slot>
		</el-form-item>
	</el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash-es'
import { any, array, bool, string } from 'vue-types'
import { FormOptions, FormInstance } from './types'

/*
import { XOR } from 'ts-xor'
type PropBase = {
	options: any
	formClass?: string
}
type defaultSearchClass = PropBase & {
	search?: boolean
}
type defaultDialogClass = PropBase & {
	dialog?: boolean
}
type Prop = XOR<defaultSearchClass, defaultDialogClass>
const props = defineProps<Prop>()
*/
const props = defineProps({
	options: array<FormOptions>().isRequired.def([]),
	model: any().isRequired.def(null),
	formClass: string().def(''),
	search: bool().def(false),
	dialog: bool().def(false)
})
// let innerModel = props.model

let rules = ref<any>(null)
let form = ref<FormInstance | null>()
const initForm = () => {
	if (props.options && props.options.length) {
		// let mo: any = {}
		let ru: any = {}
		props.options.map((item: FormOptions) => {
			// mo[item.prop!] = item.value
			item.rules && (ru[item.prop!] = item.rules)
		})
		// 构建model
		// model.value = cloneDeep(mo)
		// 构建rules
		rules.value = cloneDeep(ru)
	}
}
onMounted(() => {
	initForm()
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
