<template>
	<el-card>
		<div class="c-l">1</div>
		<div class="c-l">2</div>
		<div class="c-l">3</div>
		<div class="c-l">4</div>
	</el-card>
</template>

<script setup>
// 不能使用箭头函数，arguments会指向setup() 方法的arguments
const add = function () {
	// 将传入的不定参数转为数组对象
	let args = Array.prototype.slice.call(arguments)

	// 递归：内部函数里面进行自己调用自己
	// 当 add 函数不断调用时，把第 N+1 个括号的参数加入到第 N 个括号的参数里面
	let inner = function () {
		args.push(...arguments)
		return inner
	}

	inner.toString = function () {
		// args 里的值不断累加
		return args.reduce(function (prev, cur) {
			return prev + cur
		})
	}

	return inner
}
const curry = function () {
	const elements = document.getElementsByClassName('c-l')
	const length = elements.length
	// var 是全局变量，仅在循环第一次进行一次声明初始化，所以循环值会被覆盖掉
	// let有自己的作用域块,等价于在代码块中使用let,循环中声明了五个let块级作用域
	for (let i = 0; i <= length - 1; i++) {
		elements[i].onclick = function () {
			alert(i)
		}
	}
}
const strAdd = function (...args) {
	let parmas = args
	function sum() {
		parmas = [...parmas, ...arguments]
		return sum
	}
	sum.toString = () => parmas.reduce((a, b) => a + ',' + b)
	return sum
}

const curryStrAdd = (a) => (b) => a + ',' + b
onMounted(() => {
	curry()

	console.log(strAdd('1-1').toString())
	console.log(curryStrAdd('1-1')('1-2'))
})
</script>

<style scoped lang="scss"></style>
