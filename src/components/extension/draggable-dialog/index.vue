<script lang="ts" setup>
import { CSSProperties } from 'vue'
import { LegacyButtonType } from 'ant-design-vue/es/button/buttonTypes'
import { ButtonProps } from 'ant-design-vue/lib'
import { Icon } from '@iconify/vue'

const props = withDefaults(
  defineProps<{
    open: boolean
    title?: string
    maskClosable?: boolean
    closable?: boolean
    centered?: boolean
    initOnClose?: boolean
    confirmLoading?: boolean
    footer?: string
    destroyOnClose?: boolean
    keyboard?: boolean
    mask?: boolean
    width?: string | number
    wrapClassName?: string
    okText?: string
    cancelText?: string
    okType?: LegacyButtonType
    okButtonProps?: ButtonProps
    cancelButtonProps?: ButtonProps
    maskStyle?: CSSProperties
    bodyStyle?: CSSProperties
    zIndex?: number
    closeIcon?: string
  }>(),
  {
    maskClosable: true,
    initOnClose: true,
    destroyOnClose: true,
    keyboard: true,
    mask: true,
    closable: true,
    closeIcon: 'ant-design:close-outlined'
  }
)

const emits = defineEmits<{
  cancel: []
  ok: []
  afterClose: []
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

// 弹窗关闭时的回调函数
function handleCancel() {
  if (props.initOnClose) {
    transformX.value = 0
    transformY.value = 0
  }
  emits('update:open', false)
  emits('cancel')
}

const slots = useSlots()
</script>

<template>
  <a-modal
    :centered="centered"
    :destroy-on-close="destroyOnClose"
    :mask-closable="maskClosable"
    :open="open"
    :width="width"
    :wrap-class-name="wrapClassName"
    :keyboard="keyboard"
    :mask="mask"
    :ok-text="okText"
    :ok-type="okType"
    :closable="closable"
    :cancel-text="cancelText"
    :cancel-button-props="cancelButtonProps"
    :ok-button-prop="okButtonProps"
    :mask-style="maskStyle"
    :body-style="bodyStyle"
    :footer="footer"
    :z-index="zIndex"
    :after-close="
      () => {
        emits('afterClose')
      }
    "
    @cancel="handleCancel"
    @ok="emits('ok')"
  >
    <slot />
    <template #closeIcon>
      <Icon v-if="!slots.closeIcon" :icon="closeIcon" class="w-full h-full p-1" />
      <slot name="closeIcon" />
    </template>
    <template #title>
      <!-- 没有使用title插槽时使用title参数，否则使用title -->
      <div ref="el" class="select-none cursor-move">
        <span v-if="!slots.title">{{ title }}</span>
        <slot v-else name="title" />
      </div>
    </template>
    <template #modalRender="{ originVNode }">
      <div v-loading="confirmLoading" :style="transformStyle">
        <component :is="originVNode" />
      </div>
    </template>
    <template #footer>
      <div v-if="(!footer || footer !== 'null') && !slots.footer">
        <a-button @click="handleCancel">{{ $t('button.cancel') }}</a-button>
        <a-button type="primary" @click="emits('ok')">{{ $t('button.ok') }}</a-button>
      </div>
      <slot v-else name="footer" />
    </template>
  </a-modal>
</template>

<style scoped lang="scss"></style>
