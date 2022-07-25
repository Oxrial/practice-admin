<template>
	<el-avatar> {{ User.getUser }} </el-avatar>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
const User = useUserStore()
</script>

<style scoped lang="scss"></style>
