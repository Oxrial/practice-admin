<template>
	<el-scrollbar class="new-tab">
		<el-row>
			<el-col>
				<el-card
					:class="`tab-item center-bold item-style-0 item-style-${
						flag ? 2 : 1
					} `"
				>
					THIS IS NEW NONLAYOUT TAB STAGE
				</el-card>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="6" :offset="5">
				<el-card class="tab-item center-bold item-style-1">
					正方形边框切割
				</el-card>
			</el-col>
			<el-col :span="6" :offset="5">
				<el-card class="tab-item center-bold item-style-2">
					不等矩形边框切割
				</el-card>
			</el-col>
		</el-row>
		<el-row>
			<el-col>
				<el-card class="tab-item item-style-0 transition-main">
					<template #header>
						Animate.css 动画库
						<el-button
							class="tab-item tab-color-hover"
							@click="flag = !flag"
							plain
						>
							Trigger With Transition
						</el-button>
						<span>
							Transition 触发情况： 条件渲染 (使用 v-if)/ 条件展示 (使用
							v-show)/ 动态组件/ 组件根节点
						</span>
					</template>
					<transition
						enter-active-class="animate__animated animate__rubberBand"
						leave-active-class="animate__animated animate__wobble"
					>
						<div
							v-if="flag"
							:class="`tab-item center-bold item-style-2 transition-demo`"
						>
							不等矩形边框切割
						</div>
					</transition>
					<div
						:class="`tab-item center-bold item-style-${
							flag ? 1 : 2
						} transition-demo animate__animated animate__rubberBand`"
					>
						{{ flag ? '正方' : '不等矩' }}形边框切割
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row>
			<el-col>
				<el-card class="tab-item item-style-0 transition-main">
					<template #header>
						Gsap.js 动画库
						<el-button
							class="tab-item tab-color-hover"
							@click="flag2 = !flag2"
							plain
						>
							[{{ flag2 }}] Trigger With Transition
						</el-button>
						<el-button class="tab-item tab-color-hover" @click="enterToPlay">
							Trigger With Method To
						</el-button>
						<el-button class="tab-item tab-color-hover" @click="enterFromPlay">
							Trigger With Method From
						</el-button>
						执行动画后，若再次执行其他动画，将以当前状态进行再动画,to
						仅可执行一次
						<el-button
							class="tab-item tab-color-hover"
							:disabled="disabled"
							@click="enterTimeLinePlay"
						>
							Trigger With Method Timeline
						</el-button>
						<el-button class="tab-item tab-color-hover" @click="setGsap">
							Reset
						</el-button>
					</template>
					<transition
						@before-enter="enterFrom"
						@enter="enterActive"
						@after-enter="enterTo"
						@enter-cancelled="enterCancel"
					>
						<div
							v-if="flag2"
							class="tab-item center-bold item-style-1 transition-demo"
						>
							正方形边框切割
						</div>
					</transition>
					<div
						id="gsap-transition"
						class="tab-item center-bold item-style-2 transition-demo"
					>
						不等矩形边框切割
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<el-card class="tab-item item-style-0">
					<template #header> 自动轮播滚动 </template>
					<div class="left_chart_wrap chart_box b_img_ranking">
						<div class="common_header">实时接口风险</div>
						<div class="ranking_wrap ranking_roll" id="wrapper">
							<div class="main">
								<el-row
									class="Interface"
									v-for="(item, index) in dataMap.data"
									:key="index"
								>
									<el-col :span="20" :offset="2">
										<el-row class="Interface_padding">
											<el-col :span="12">{{ item.name }}</el-col>
											<el-col :span="12" class="Interface_date">
												{{ item.date }}
											</el-col>
										</el-row>
										<el-row class="Interface_padding">
											<el-col :span="24" class="Interface_text">
												{{ item.text + item.name }}
											</el-col>
										</el-row>
									</el-col>
								</el-row>
							</div>
						</div>
					</div>
				</el-card>
			</el-col>

			<el-col :span="6">
				<el-card class="tab-item item-style-0"> </el-card>
			</el-col>
		</el-row>
	</el-scrollbar>
</template>

<script setup lang="ts">
import 'animate.css'
import gsap from 'gsap'
import { ElTableColumn } from 'element-plus'
const flag = ref(true)
const flag2 = ref(true)

const setGsap = () => {
	// 设定gsap元素初始定义，例transformOrigin设定动画以中心为基准，例如旋转等的中心
	gsap.set('#gsap-transition', {
		x: 0,
		rotateY: 180,
		transformOrigin: 'center'
	})
}
onMounted(() => {
	setGsap()
})
const enterFromPlay = () => {
	// 从到某状态from到当前状态
	gsap.from('#gsap-transition', {
		x: 200,
		rotateX: 160,
		rotateY: 50
		// repeat: -1, //重复次数，-1 :无限
		// yoyo: true // 如果true，动画的循环是倒序 需要配合repeat属性
	})
}
const enterToPlay = () => {
	// 从当前状态开始to到某状态
	gsap.to('#gsap-transition', {
		x: 200,
		rotateX: 360,
		rotateY: 0
		// repeat: -1, //重复次数，-1 :无限
		// yoyo: true // 如果true，动画的循环是倒序 需要配合repeat属性
	})
}
const disabled = ref(false)
// 时间线动画链式，依照链式顺序同步执行
const enterTimeLinePlay = async () => {
	disabled.value = true
	await gsap
		.timeline()
		.to('#gsap-transition', {
			x: 200,
			rotateX: 360,
			rotateY: 0
			// repeat: -1, //重复次数，-1 :无限
			// yoyo: true // 如果true，动画的循环是倒序 需要配合repeat属性
		})
		.from(
			'#gsap-transition',
			{
				x: 200,
				rotateX: 160,
				rotateY: 50
				// repeat: -1, //重复次数，-1 :无限
				// yoyo: true // 如果true，动画的循环是倒序 需要配合repeat属性
			},
			// 距上一个动画后的时间差,<上一个动画开始的时间点，>上一个动画结束的时间点，+：之后，例0.5，0.5后；-：之前，例-0.5，提前0.5
			'>0.5'
		)

	disabled.value = false
}

const enterFrom = (el: Element) => {
	// 进入之前
	gsap.set(el, { x: 0 })
}
// const enterActive = (el: Element, done: Function) => {
// 	// 过度曲线
// }
const enterActive = (el: Element, done: gsap.Callback) => {
	// 过度曲线
	gsap.to(el, { x: 200, onComplete: done })
}
const enterTo = (el: Element) => {
	// 过度完成
}
const enterCancel = (el: Element) => {
	// 过度打断
}
type columns = {
	label: string
	prop: string
	width?: number | string
}
type data = {
	name: string
	date: string
	text: string
}
type listdata = { columns: Array<columns>; data: data[] }
const dataMap = reactive<listdata>({
	columns: [
		{ label: '名', prop: 'name' },
		{ label: '日', prop: 'date' },
		{ label: '文', prop: 'text' }
	],
	data: [
		{ name: '1', date: '游8路', text: 'zhelishiwenben' },
		{ name: '2', date: '游8路', text: 'zhelishiwenben' },
		{ name: '3', date: '游8路', text: 'zhelishiwenben' },
		{ name: '4', date: '游8路', text: 'zhelishiwenben' },
		{ name: '5', date: '游8路', text: 'zhelishiwenben' },
		{ name: '6', date: '游8路', text: 'zhelishiwenben' },
		{ name: '7', date: '游8路', text: 'zhelishiwenben' },
		{ name: '8', date: '游8路', text: 'zhelishiwenben' },
		{ name: '9', date: '游8路', text: 'zhelishiwenben' },
		{ name: '10', date: '游8路', text: 'zhelishiwenben' },
		{ name: '---', date: '---', text: 'zhelishiwenben' }
	]
})
onMounted(() => {
	// dataMap.list.push(...dataMap.list)
	console.log(window)
})
</script>

<style scoped lang="scss">
@import '@/assets/style.module.scss';
@import './index.scss';
</style>
