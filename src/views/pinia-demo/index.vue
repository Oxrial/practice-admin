<template>
	<div>
		<el-card>
			PINIA
			<div>NAME: {{ Test.name }} NUMBER: {{ Test.number }}</div>
		</el-card>
		<el-card>
			<el-button type="primary" @click="changeTest1"> 直接改值 </el-button>
			<el-button type="primary" @click="changeTest2">
				$patch 改值 对象
			</el-button>
			<el-button type="primary" @click="changeTest3">
				$patch 改值 工厂函数
			</el-button>
			<el-button type="primary" @click="changeTest4"> $state 改值 </el-button>
			<el-button type="primary" @click="changeTest5"> action 改值 </el-button>
			<el-button @click="changeTest6"> $reset 重置值 </el-button>
		</el-card>
		<el-card>
			解构式
			<div>NAME:{{ name }} NUMBER: {{ number }}</div>
		</el-card>
		<el-card>
			GETTER
			注：getter方法中的参数不接受任何自定义参数，默认参数的类型即仅有其state
			<div>getter方法调用: {{ Test.getName }}</div>
		</el-card>
	</div>
</template>

<script setup lang="ts">
import { useTestStore } from '@/store'
import { ElNotification } from 'element-plus'
import { storeToRefs } from 'pinia'
const Test = useTestStore()
const changeTest1 = () => Test.number++
const changeTest2 = () => Test.$patch({ number: 2 })
const changeTest3 = () => Test.$patch((state) => state.number++)
// 需要整个对象都修改，即属性全重写
const changeTest4 = () => (Test.$state = { name: 'B', number: 3 })
// 调用action中的方法
const changeTest5 = () => Test.setNumber()
const changeTest6 = () => Test.$reset()
// 不具有响应式
// const { name, number } = Test
// 响应式解构 RefImpl
const { name, number } = storeToRefs(Test)

// 当内容更新提交值时触发
Test.$subscribe(
	(args, state) => {
		ElNotification({
			title: 'args',
			message: JSON.stringify(args),
			position: 'bottom-right'
		})
		nextTick(() =>
			ElNotification({
				title: 'state',
				message: JSON.stringify(state),
				position: 'bottom-right'
			})
		)
	},
	{
		// detached: true,
		deep: true,
		flush: 'post'
	}
)
// 监听action中的方法，调用时执行，异步
Test.$onAction(
	() => {},
	// detached组件销毁后继续监听
	true
)
</script>

<style scoped lang="scss"></style>
