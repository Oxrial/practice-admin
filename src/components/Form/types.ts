import { CSSProperties } from 'vue'
import type { RuleItem } from './rules'
export type FormOptions = {
	type:
		| 'cascader'
		| 'checkbox'
		| 'checkbox-group'
		| 'checkbox-button'
		| 'date-picker'
		| 'input'
		| 'input-number'
		| 'radio'
		| 'radio-group'
		| 'radio-button'
		| 'rate'
		| 'select'
		| 'option'
		| 'slider'
		| 'switch'
		| 'time-picker'
		| 'time-select'
		| 'transfer'
		| 'upload'
	value?: any
	label?: string
	prop?: string
	rules?: RuleItem[]
	placeholder?: string
	attrs?: {
		style?: CSSProperties
		clearable?: boolean
		showPassword?: boolean
		disabled?: boolean
	}
	children?: FormOptions[]
}
