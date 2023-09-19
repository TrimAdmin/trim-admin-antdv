<script setup lang="ts">
defineProps<{
  // 水平对齐方向
  align?: 'start' | 'center' | 'end'
}>()
</script>

<template>
  <div :class="`h-[64px] flex bg-white w-full fixed bottom-0 px-4 justify-${align || 'end'} gap-2 items-center z-[900]`">
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
