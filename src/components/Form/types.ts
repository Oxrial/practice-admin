import type { RuleItem } from './rules'
export type FormOption = {
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
	value: any
	label?: string
	prop?: string
	rules?: RuleItem[]
	placeholder?: string
	attrs?: { clearable?: boolean; showPassword?: boolean; disabled?: boolean }
}
