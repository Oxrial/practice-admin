import { ValidateFieldsError } from 'async-validator'
import { Callback } from 'element-plus'
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
export type ValidateFieldCallback = {
	(message?: string, invalidFields?: ValidateFieldsError): void
}
export type FormInstance = {
	registerLabelWidth(width: number, oldWidth: number): void
	deregisterLabelWidth(width: number): void
	autoLabelWidth: string
	emit: (evt: string, ...args: any[]) => void
	labelSuffix: string
	inline?: boolean
	model: Record<string, unknown>
	size?: string
	showMessage?: boolean
	labelPosition?: string
	labelWidth?: string
	rules?: Record<string, unknown>
	statusIcon?: boolean
	hideRequiredAsterisk?: boolean
	disabled?: boolean
	validate: (callback?: Callback) => Promise<boolean>
	resetFields: () => void
	clearValidate: (props?: string | string[]) => void
	validateField: (props: string | string[], cb: ValidateFieldCallback) => void
}
