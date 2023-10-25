<script lang="ts" setup>
import { scrollbarInstance } from '@/plugins'
import { OverlayScrollbars } from 'overlayscrollbars'

withDefaults(
  defineProps<{
    backTop: boolean
  }>(),
  {
    backTop: true
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
    // console.log(instance.elements().scrollbarVertical.handle.offsetTop)
    scrollTop.value = instance.elements().scrollOffsetElement.scrollTop
  })
})
</script>

<template>
  <div ref="contentEl" class="trim-main-content">
    <slot />
    <a-back-top v-if="backTop && scrollTop > 200" :visibility-height="0" @click="handleBackTop" />
  </div>
</template>

<style scoped lang="scss"></style>
