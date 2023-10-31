<script lang="ts" setup>
import { useConfigStoreHook } from '@/store'

const isDarkTheme = computed<boolean>(() => useConfigStoreHook().darkTheme)

function toggleTheme() {
  useConfigStoreHook().setDarkTheme(!isDarkTheme.value)
}
</script>

<template>
  <div class="h-full flex items-center hover:bg-gray-50 px-2 dark:hover:bg-slate-700">
    <a-tooltip destroy-tooltip-on-hide>
      <template #title>
        {{ isDarkTheme ? '亮色模式' : '暗色模式' }}
      </template>
      <Icon
        v-if="isDarkTheme"
        :height="18"
        class="cursor-pointer hover:text-blue-500"
        icon="ri:sun-line"
        @click="toggleTheme"
      />
      <Icon v-else :height="18" class="cursor-pointer hover:text-blue-500" icon="ri:moon-line" @click="toggleTheme" />
    </a-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
