<script lang="ts" setup>
import { debounce } from 'lodash'
import { useConfigStoreHook } from '@/store'
import { lightTheme } from '@/theme'

defineProps<{
  loading?: boolean
}>()

// 大屏分辨率宽度
const width = ref<number>(1920)
// 大屏分辨率高度
const height = ref<number>(1080)
// 容器缩放率
const scale = ref<number>(0)
// 缩放容器实例
const scaleBoxRef = shallowRef<HTMLDivElement>()

onMounted(() => {
  // 自适应缩放
  setScale()
  window.addEventListener('resize', debounce(setScale, 100))
})

function getScale() {
  const wh = window.innerHeight / height.value
  const ww = window.innerWidth / width.value
  return ww < wh ? ww : wh
}

function setScale() {
  scale.value = getScale()
  if (scaleBoxRef.value) {
    scaleBoxRef.value.style.setProperty('--scale', scale.value.toString())
  }
}
</script>

<template>
  <a-config-provider component-size="large" :auto-insert-space-in-button="false" :theme="lightTheme">
    <div v-loading="loading" class="screen-container">
      <div ref="scaleBoxRef" class="scale-box" :style="{ width: width + 'px', height: height + 'px' }">
        <slot />
      </div>
    </div>
  </a-config-provider>
</template>

<style scoped lang="scss">
.screen-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #071828;

  .scale-box {
    --scale: 1;

    position: absolute;
    top: 50%;
    left: 50%;
    color: rgb(255 255 255 / 70%);
    background-color: transparent;
    transform: scale(var(--scale)) translate(-50%, -50%);
    transform-origin: 0 0;
    transition: 0.3s;
  }
}
</style>
