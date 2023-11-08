<script lang="ts" setup>
import { CSSProperties } from 'vue'

withDefaults(
  defineProps<{
    open: boolean
    title: string
    maskClosable?: boolean
    centered?: boolean
  }>(),
  {
    maskClosable: false
  }
)

const emits = defineEmits<{
  cancel: []
  ok: []
  'update:open': [value: boolean]
}>()

const el = shallowRef<HTMLDivElement>()
const transformStyle = computed<CSSProperties>(() => ({
  transform: `translate(${transformX.value}px, ${transformY.value}px)`
}))
const startX = ref<number>(0)
const startY = ref<number>(0)
const startedDrag = ref<boolean>(false)
const transformX = ref<number>(0)
const transformY = ref<number>(0)
const preTransformX = ref<number>(0)
const preTransformY = ref<number>(0)
const dragRect = ref({ left: 0, right: 0, top: 0, bottom: 0 })

const { x, y, isDragging } = useDraggable(el, {
  initialValue: { x: 0, y: 0 }
})

watch([x, y], () => {
  if (!startedDrag.value) {
    startX.value = x.value
    startY.value = y.value
    const bodyRect = document.body.getBoundingClientRect()
    const titleRect = el.value!.getBoundingClientRect()
    dragRect.value.right = bodyRect.width - titleRect.width
    dragRect.value.bottom = bodyRect.height - titleRect.height
    preTransformX.value = transformX.value
    preTransformY.value = transformY.value
  }
  startedDrag.value = true
})

watch(isDragging, () => {
  if (!isDragging) {
    startedDrag.value = false
  }
})

watchEffect(() => {
  if (startedDrag.value) {
    transformX.value =
      preTransformX.value + Math.min(Math.max(dragRect.value.left, x.value), dragRect.value.right) - startX.value
    transformY.value =
      preTransformY.value + Math.min(Math.max(dragRect.value.top, y.value), dragRect.value.bottom) - startY.value
  }
})

window.addEventListener('resize', () => {
  startedDrag.value = false
})
</script>

<template>
  <a-modal
    centered
    destroy-on-close
    :mask-closable="maskClosable"
    :open="open"
    @cancel="emits('cancel')"
    @ok="emits('ok')"
    @close="emits('update:open', false)"
  >
    <slot />
    <template #title>
      <div ref="el" class="select-none cursor-move">{{ title }}</div>
    </template>
    <template #modalRender="{ originVNode }">
      <div :style="transformStyle">
        <component :is="originVNode" />
      </div>
    </template>
  </a-modal>
</template>

<style scoped lang="scss"></style>
