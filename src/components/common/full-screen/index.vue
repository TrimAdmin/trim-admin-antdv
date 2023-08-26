<script setup lang="ts">
import { Icon } from '@iconify/vue'

const isFullScreen = ref<boolean>(false)

document.addEventListener('fullscreenchange', () => {
  isFullScreen.value = !isFullScreen.value
})

function handleFullScreen() {
  document.documentElement.requestFullscreen()
}

function handleExitFullScreen() {
  document.exitFullscreen()
}
</script>

<template>
  <Icon v-if="!isFullScreen" :height="18" icon="ant-design:fullscreen-outlined" class="cursor-pointer" @click="handleFullScreen" />
  <Icon v-else :height="18" icon="ant-design:fullscreen-exit-outlined" class="cursor-pointer" @click="handleExitFullScreen" />
</template>

<style scoped lang="scss"></style>
