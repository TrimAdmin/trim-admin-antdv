<script setup lang="ts">
import { scrollbarInstance } from '@/plugins'
import { OverlayScrollbars } from 'overlayscrollbars'

withDefaults(
  defineProps<{
    showBackTop?: boolean
  }>(),
  {
    showBackTop: true
  }
)

const contentEl = shallowRef<HTMLDivElement>()
const scrollTop = ref<number>(0)
const scrollbar = ref()

// 回到顶部
function handleBackTop() {
  // 更新元素滚动状态至顶部
  scrollbar.value.elements().scrollOffsetElement.scrollTo({
    behavior: 'smooth',
    top: 0
  })
}

// 创建滚动条实例
onMounted(() => {
  scrollbar.value = scrollbarInstance(contentEl.value!)
  // console.log(scrollbar.value.elements())
  scrollbar.value.on('scroll', (instance: OverlayScrollbars) => {
    // console.log(scrollbar.value.elements().scrollOffsetElement.scrollTop)
    scrollTop.value = instance.elements().scrollOffsetElement.scrollTop
  })
})
</script>

<template>
  <div ref="contentEl" data-overlayscrollbars-initialize>
    <slot />
    <a-back-top v-if="scrollTop > 200 && showBackTop" :visibility-height="0" @click="handleBackTop" />
  </div>
</template>

<style scoped lang="scss"></style>
