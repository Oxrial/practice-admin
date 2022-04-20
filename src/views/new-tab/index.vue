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
							Trigger
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
					<transition
						enter-active-class="animate__animated animate__rubberBand"
						leave-active-class="animate__animated animate__wobble"
					>
						<div
							:class="`tab-item center-bold item-style-${
								flag ? 1 : 2
							} transition-demo`"
						>
							不等矩形边框切割
						</div>
					</transition>
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
							Trigger
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
							class="tab-item center-bold item-style-2 transition-demo"
						>
							不等矩形边框切割
						</div>
					</transition>
				</el-card>
			</el-col>
		</el-row>
	</el-scrollbar>
</template>

<script setup lang="ts">
import 'animate.css'
import gsap from 'gsap'
const flag = ref(true)
const flag2 = ref(true)
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
</script>

<style scoped lang="scss">
@import '@/assets/style.module.scss';
.new-tab {
	background-color: theme(aside_theme);
	width: 100vw;
	height: 100vh;
	* {
		color: #fff;
	}
	.el-row {
		margin-bottom: 20px;
		.el-col {
			.tab-item {
				background-color: transparent;
			}
			.tab-color-hover:hover {
				color: skyblue;
			}
			.center-bold {
				text-align: center;
				font-weight: bold;
			}
			.item-style-0 {
				margin: 20px;
			}
			.item-style-1 {
				border: 15px transparent solid;
				border-image-source: url('@/assets/border-image1.png');
				border-image-slice: 165;
				border-image-width: 15px;
				border-image-repeat: round;
			}
			.item-style-2 {
				border: 15px transparent solid;
				border-image-source: url('@/assets/border-image2.png');
				border-image-slice: 51 38 20 132;
				border-image-width: 51px 38px 20px 132px;
				border-image-repeat: round;
			}
			.transition-main {
				:deep(.el-card__body) {
					display: flex;
					justify-content: space-evenly;
					.transition-demo {
						width: 20%;
						padding: 20px;
					}
				}
			}
		}
	}
}
</style>
