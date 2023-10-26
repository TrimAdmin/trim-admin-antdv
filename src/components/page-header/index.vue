<script lang="ts" setup>
withDefaults(
  defineProps<{
    // 标题
    title: string
    // 副标题
    subtitle?: string
    // 是否脱离文档流
    fixed?: boolean
  }>(),
  {
    fixed: false
  }
)
</script>

<template>
  <div>
    <div
      :class="`${
        fixed && 'fixed z-[900] shadow-md dark:shadow-gray-800'
      } page-header h-[96px] w-full dark:text-white p-4 flex-bc gap-[16px]`"
    >
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
    <div v-if="fixed" class="h-[96px] w-full"></div>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  background-color: var(--trim-bg-color);
}
</style>
