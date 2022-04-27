<template>
	<el-form
		inline
		:class="
			formClass +
			((search && ' search-form') || (dialog && ' dialog-form') || '')
		"
	>
		<el-form-item v-for="item in options">
			{{ item }}
			<!-- <component :is="`el-${item.type}`"></component> -->
		</el-form-item>
	</el-form>
</template>

<script setup lang="ts">
import { array, bool } from 'vue-types'
import { PropType } from 'vue'
import { FormOption } from './types'
import { XOR } from 'ts-xor'

type PropBase = {
	options: PropType<FormOption[]>
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
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
