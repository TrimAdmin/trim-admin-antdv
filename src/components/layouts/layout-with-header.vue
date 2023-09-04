<script setup lang="ts">
defineProps<{
  noBackground?: boolean
  title: string
  withFooter?: boolean
}>()
</script>

<template>
  <div :class="`layout-with-header ${withFooter ? 'pb-[64px]' : ''}`">
    <div class="w-full bg-white dark:bg-gray-900 dark:text-white px-4 py-3 flex-bc gap-[16px]">
      <div>
        <slot name="left" />
      </div>
      <div class="flex-1">
        <div>
          <slot name="extra" />
        </div>
        <div class="prose-2xl leading-[2] font-bold">{{ title }}</div>
        <div>
          <slot name="subtitle" />
        </div>
      </div>
      <div>
        <slot name="right" />
      </div>
    </div>
    <div
      :class="`content text-black dark:text-white
      ${noBackground ? 'transparent' : 'bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700'}
    `"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-with-header {
  height: 100%;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 16px;
  }
}
</style>
