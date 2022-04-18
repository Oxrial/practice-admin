<template>
	<el-breadcrumb separator="/">
		<template v-for="(path, index) in matched">
			<el-breadcrumb-item v-if="index > 0" :to="{ path: path.path }">
				{{ path.meta.title }}
			</el-breadcrumb-item>
		</template>
	</el-breadcrumb>
</template>

<script setup lang="ts">
type Prop = {
	matched: Array<any>
}
const props = defineProps<Prop>()
</script>

<style scoped lang="scss"></style>
