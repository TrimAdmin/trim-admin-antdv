<script setup lang="ts">
defineProps<{
  // 水平对齐方向
  align?: 'start' | 'center' | 'end'
}>()
</script>

<template>
  <a-space :class="`fixed-footer h-[64px] bg-white w-full fixed bottom-0 px-4 justify-${align || 'end'}`">
    <slot />
  </a-space>
</template>

<style scoped lang="scss"></style>
