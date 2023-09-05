<script setup lang="ts">
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
  <div class="h-full flex items-center hover:bg-gray-50 px-2 dark:hover:bg-slate-700">
    <a-tooltip>
      <template #title>
        {{ isFullScreen ? '退出全屏' : '全屏' }}
      </template>
      <Icon
        v-if="!isFullScreen"
        :height="18"
        icon="ant-design:fullscreen-outlined"
        class="cursor-pointer hover:text-blue-500"
        @click="handleFullScreen"
      />
      <Icon v-else :height="18" icon="ant-design:fullscreen-exit-outlined" class="cursor-pointer hover:text-blue-500" @click="handleExitFullScreen" />
    </a-tooltip>
  </div>
</template>

<style scoped lang="scss"></style>
