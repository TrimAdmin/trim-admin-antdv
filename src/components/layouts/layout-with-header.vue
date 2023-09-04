<script setup lang="ts">
const props = defineProps<{
  noBackground?: boolean
  title: string
}>()
</script>

<template>
  <div class="w-full bg-white">
    <div></div>
    <div class="prose-xl font-bold">{{ title }}</div>
  </div>
  <div
    :class="`regular-layout text-black dark:text-white
      ${noBackground ? 'transparent' : 'bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700'}
    `"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.regular-layout {
  padding: 12px;
  //width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 16px;
}
</style>
