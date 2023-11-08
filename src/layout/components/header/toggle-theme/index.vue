<script lang="ts" setup>
import { useConfigStoreHook } from '@/store'

const isDarkTheme = computed<boolean>(() => useConfigStoreHook().darkTheme)

function toggleTheme() {
  useConfigStoreHook().setDarkTheme(!isDarkTheme.value)
}
</script>

<template>
  <div class="h-full flex items-center hover:ant-bg-primary px-2">
    <a-tooltip destroy-tooltip-on-hide>
      <template #title>
        {{ isDarkTheme ? '亮色模式' : '暗色模式' }}
      </template>
      <Icon
        v-if="isDarkTheme"
        :height="18"
        class="cursor-pointer hover:ant-text-color-primary"
        icon="ri:sun-line"
        @click="toggleTheme"
      />
      <Icon
        v-else
        :height="18"
        class="cursor-pointer hover:ant-text-color-primary"
        icon="ri:moon-line"
        @click="toggleTheme"
      />
    </a-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
