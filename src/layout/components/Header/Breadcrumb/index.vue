<template>
	<el-breadcrumb separator="/">
		<template v-for="route in matched">
			<el-breadcrumb-item :to="{ path: route.path }">
				{{ route.meta.title }}
			</el-breadcrumb-item>
		</template>
	</el-breadcrumb>
</template>

<script setup lang="ts">
type Prop = {
	matched: Array<any>
}

const props = defineProps<Prop>()
console.log(props.matched)
</script>

<style scoped lang="scss"></style>
