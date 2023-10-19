<script lang="ts" setup>
withDefaults(
  defineProps<{
    // 标题
    title: string
    // 副标题
    subtitle?: string
    // 是否固定顶部
    fixed?: boolean
  }>(),
  {
    fixed: () => true
  }
)
</script>

<template>
  <!-- 头部 -->
  <div :class="`${fixed && 'fixed z-[900]'} h-[96px] w-ih shadow-md bg-white dark:bg-gray-900 dark:text-white p-4 flex-bc gap-[16px]`">
    <div>
      <slot name="left" />
    </div>
    <div class="flex-1">
      <div>
        <slot name="extra" />
      </div>
      <div class="text-2xl leading-[1] pb-2 font-bold">{{ title }}</div>
      <div class="text-gray-500">
        {{ subtitle }}
        <slot v-if="!subtitle" name="subtitle" />
      </div>
    </div>
    <div>
      <slot name="right" />
    </div>
  </div>
  <!-- placeholder -->
  <div v-if="fixed" class="h-[96px]"></div>
</template>

<style scoped lang="scss"></style>
