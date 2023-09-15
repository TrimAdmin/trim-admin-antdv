<script setup lang="ts">
defineProps<{
  // 是否无背景
  noBackground?: boolean
  // 标题
  title: string
  // 副标题
  subtitle?: string
  // 是否带有footer，为true时会带64px的下内边距
  withFooter?: boolean
}>()
</script>

<template>
  <div :class="`layout-with-header ${withFooter ? 'pb-[64px]' : ''}`">
    <div class="w-full bg-white dark:bg-gray-900 dark:text-white p-4 flex-bc gap-[16px]">
      <div>
        <slot name="left" />
      </div>
      <div class="flex-1">
        <div>
          <slot name="extra" />
        </div>
        <div class="prose-2xl leading-[1] pb-2 font-bold">{{ title }}</div>
        <div class="text-gray-500">
          {{ subtitle }}
          <slot v-if="!subtitle" name="subtitle" />
        </div>
      </div>
      <div>
        <slot name="right" />
      </div>
    </div>
    <div
      :class="`content text-black dark:text-white
      ${noBackground ? 'transparent' : 'p-3 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700'}
    `"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-with-header {
  //height: 100%;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 16px;
    border-radius: 8px;
    max-width: calc(100% - 32px);
  }
}
</style>
