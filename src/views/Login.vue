<template>
	<div class="login-main">
		<el-form
			ref="ruleFormRef"
			:model="ruleForm"
			status-icon
			:rules="rules"
			label-width="120px"
			class="demo-ruleForm"
		>
			<el-form-item label="密码" prop="pass">
				<el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
			</el-form-item>
			<el-form-item label="确定密码" prop="checkPass">
				<el-input
					v-model="ruleForm.checkPass"
					type="password"
					autocomplete="off"
				/>
			</el-form-item>
			<el-form-item label="年龄" prop="age">
				<el-input v-model.number="ruleForm.age" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm(ruleFormRef)"
					>提交</el-button
				>
				<el-button @click="resetForm(ruleFormRef)">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
	if (!value) {
		return callback(new Error('请输入年龄'))
	}
	setTimeout(() => {
		if (!Number.isInteger(value)) {
			callback(new Error('请输入数字'))
		} else {
			if (value < 18) {
				callback(new Error('年龄必须大于18岁'))
			} else {
				callback()
			}
		}
	}, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('请输入密码'))
	} else {
		if (ruleForm.checkPass !== '') {
			if (!ruleFormRef.value) return
			ruleFormRef.value.validateField('checkPass', () => null)
		}
		callback()
	}
}
const validatePass2 = (rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('请再次输入密码'))
	} else if (value !== ruleForm.pass) {
		callback(new Error('两次输入密码不一致'))
	} else {
		callback()
	}
}

const ruleForm = reactive({
	pass: '',
	checkPass: '',
	age: ''
})

const rules = reactive({
	pass: [{ validator: validatePass, trigger: 'blur' }],
	checkPass: [{ validator: validatePass2, trigger: 'blur' }],
	age: [{ validator: checkAge, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.validate((valid) => {
		if (valid) {
			console.log('提交!')
		} else {
			console.log('提交失败!')
			return false
		}
	})
}

const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
}
</script>
<style scoped>
.login-main {
	width: 50vh;
	height: 100vh;
	margin: 0 auto;
	display: flex;
	align-items: center;
	background-color: pink;
}
</style>
