<script lang="ts" setup>
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
  <div class="h-full flex items-center px-2 hover:ant-bg-primary">
    <a-tooltip destroy-tooltip-on-hide>
      <template #title>
        {{ isFullScreen ? '退出全屏' : '全屏' }}
      </template>
      <Icon
        v-if="!isFullScreen"
        :height="18"
        class="cursor-pointer hover:ant-text-color-primary"
        icon="ant-design:fullscreen-outlined"
        @click="handleFullScreen"
      />
      <Icon
        v-else
        :height="18"
        class="cursor-pointer hover:text-blue-500"
        icon="ant-design:fullscreen-exit-outlined"
        @click="handleExitFullScreen"
      />
    </a-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
