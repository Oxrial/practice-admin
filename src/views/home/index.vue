<template>
	<el-card class="animate-gsap">
		<section class="animate-start">
			<h1>THIS IS HOME STAGE</h1>
			<h2>
				GSAP Animate Start From This [SCROLL
				<el-icon class="animate-start-icon">
					<el-icon-bottom />
				</el-icon>
				]
			</h2>
		</section>
	</el-card>
	<el-card class="animate-gsap">
		<div class="readme-main">
			<h1>README</h1>
			<h3>技术栈：</h3>
			<el-space wrap :size="20">
				<el-tag class="tec-tag" v-for="tec in tecList">
					{{ tec }}
				</el-tag>
			</el-space>
			<h2>--- 个人实践项目</h2>
		</div>
	</el-card>
	<el-card class="animate-gsap">
		<section class="animate-end">
			<h2>
				GSAP Animate End For This [SCROLL
				<el-icon class="animate-end-icon">
					<el-icon-top />
				</el-icon>
				]
			</h2>
		</section>
	</el-card>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const tecList = [
	'Npm',
	'Vue3.2',
	'TS',
	'Jsx',
	'Scss',
	'Element-Plus',
	'Pinia',
	'Animate.css',
	'Gsap',
	'...'
]
const animateStart = () => {
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.animate-start',
				start: '10% top',
				end: 'bottom center',
				markers: false,
				scroller: '.el-main',
				pin: true,
				scrub: true
			}
		})
		.from('.animate-start h2', { y: innerHeight * 2 })
		.from('.animate-start .animate-start-icon', { y: innerHeight * -1 })

	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.readme-main',
				start: '30% center',
				end: 'center top',
				markers: false,
				scroller: '.el-main',
				pin: true,
				scrub: true
			}
		})
		.from('.readme-main h1', { x: innerWidth * -2 })
		.from('.readme-main h3', { x: innerWidth * -2 })
		.from('.readme-main .tec-tag', { y: innerHeight * -2 })
		.from('.readme-main h2', { y: innerHeight * -2 })

	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.animate-end',
				start: '20% 50%',
				end: '20% 20%',
				markers: false,
				scroller: '.el-main',
				pin: true,
				scrub: true
			}
		})
		.from('.animate-end h2', { x: innerWidth * -1 })
		.from('.animate-end .animate-end-icon', { y: innerHeight * -1 })
}
onMounted(() => {
	animateStart()
})
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
