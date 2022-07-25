<template>
	<el-link
		rel="stylesheet"
		href="https://cloud.tencent.com/developer/article/1851152"
		>参考</el-link
	>
	<p>把一个多参数的函数转化为单参数函数的方法</p>

	<p>
		利用闭包，可以形成一个不销毁的私有作用域，把预先处理的内容都存在这个不销毁的作用域里面，并且返回一个函数，以后要执行的就是这个函数
	</p>
	<p>
		参数复用 –
		当在多次调用同一个函数，并且传递的参数绝大多数是相同的，那么该函数可能是一个很好的柯里化候选
	</p>
	<p>提前返回 – 多次调用多次内部判断，可以直接把第一次判断的结果返回外部接收</p>
	<p>延迟计算/运行 – 避免重复的去执行程序，等真正需要结果的时候再执行</p>
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
	// console.log(strAdd('1-1').toString()) // 1-1
	// console.log(curryStrAdd('1-1')('1-2')) // 1-1,1-2
})
</script>

<style scoped lang="scss"></style>
