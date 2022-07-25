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
			<el-form-item label="用户" prop="user">
				<el-input v-model="ruleForm.user" />
			</el-form-item>
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
import { FormInstance, ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

import { useUserStore } from '@/store/user'
const User = useUserStore()

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
	user: 'Aya',
	pass: '123456',
	checkPass: '123456',
	age: 18
})

const rules = reactive({
	pass: [{ validator: validatePass, trigger: 'blur' }],
	checkPass: [{ validator: validatePass2, trigger: 'blur' }],
	age: [{ validator: checkAge, trigger: 'blur' }]
})

const router = useRouter()
const submitForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	console.log(formEl)

	formEl.validate((valid) => {
		if (valid) {
			User.setUser(ruleForm.user)
			console.log('提交! ' + User.getUser)

			ElMessage({
				message: '登录成功，正在跳转至首页...',
				type: 'success'
			})
			router.push('/home')
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
<style scoped lang="scss">
@import './index.scss';
</style>
