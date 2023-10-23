<script lang="ts" setup>
import { handleJumpTo } from '@/router/utils.ts'
</script>

<template>
  <a-button type="primary" @click="handleJumpTo('home')">返回首页</a-button>
</template>

<style lang="scss" scoped></style>
