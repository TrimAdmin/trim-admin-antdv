<script setup lang="ts">
import { useConfigStoreHook } from '@/store'
import { Icon } from '@iconify/vue'

const isDarkTheme = computed<boolean>(() => useConfigStoreHook().darkTheme)

function toggleTheme() {
  useConfigStoreHook().setDarkTheme(!isDarkTheme.value)
}
</script>

<template>
  <div class="h-full flex items-center hover:bg-gray-50 px-2 dark:hover:bg-slate-700">
    <a-tooltip>
      <template #title>
        {{ isDarkTheme ? '亮色模式' : '暗色模式' }}
      </template>
      <Icon v-if="isDarkTheme" :height="18" icon="ri:sun-line" class="cursor-pointer hover:text-blue-500" @click="toggleTheme" />
      <Icon v-else :height="18" icon="ri:moon-line" class="cursor-pointer hover:text-blue-500" @click="toggleTheme" />
    </a-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
