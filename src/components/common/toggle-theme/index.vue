<script setup lang="ts">
import { useConfigStoreHook } from '@/store'
import { Icon } from '@iconify/vue'

const isDarkTheme = computed<boolean>(() => useConfigStoreHook().darkTheme)

function toggleTheme() {
  useConfigStoreHook().setDarkTheme(!isDarkTheme.value)
}
</script>

<template>
  <Icon v-if="!isDarkTheme" :height="18" icon="ri:sun-line" class="cursor-pointer" @click="toggleTheme" />
  <Icon v-else :height="18" icon="ri:moon-line" class="cursor-pointer" @click="toggleTheme" />
</template>

<style lang="scss" scoped></style>
