<script lang="ts" setup>
import { CSSProperties } from 'vue'

const props = withDefaults(
  defineProps<{
    // 是否无背景
    transparent?: boolean
    // 阴影配置
    shadow?: boolean
    // 无边框
    borderless?: boolean
    // 圆角
    rounded?: boolean
    // 内容区类名
    bodyClass?: string
    // 内容区样式
    bodyStyle?: CSSProperties
    // 最大高度，超出提供展开按钮
    maxHeight?: string
    // 只展开一次
    once?: boolean
  }>(),
  {
    shadow: true,
    rounded: true
  }
)

const collapsed = ref<boolean>(false)
const hide = ref<boolean>(false)
const elRef = shallowRef<HTMLDivElement>()
const slots = useSlots()
const elHeight = ref<string>()

function handleCollapse() {
  collapsed.value = !collapsed.value
  if (props.once) {
    hide.value = true
  }
}

onMounted(() => {
  if (props.maxHeight && (elRef.value?.offsetHeight || 0) >= +props.maxHeight.replace(/[^0-9]/g, '')) {
    elHeight.value = elRef.value?.offsetHeight + 'px'
    collapsed.value = true
  }
})
</script>

<template>
  <div
    ref="elRef"
    :class="`regular-layout flex flex-col relative
      ${transparent ? '' : 'with-bg'}
      ${shadow && !transparent ? 'with-shadow' : ''}
      ${rounded ? 'with-rounded' : ''}
      ${borderless || transparent ? '' : 'trim-border-1'}
      ${maxHeight && !collapsed ? 'opened' : ''}
    `"
    :style="maxHeight && collapsed ? { height: maxHeight } : {}"
  >
    <div v-if="slots.header" class="header">
      <slot name="header" />
    </div>
    <div :class="`${bodyClass || ''} ${transparent ? '' : 'p-6'}`" :style="bodyStyle || {}">
      <slot />
    </div>
    <div
      v-if="maxHeight && !hide"
      class="btn-collapse absolute bottom-0 w-full flex-c py-4 text-gray hover:(cursor-pointer trim-text-color) transition"
      @click="handleCollapse"
    >
      <Icon icon="ant-design:down-outlined" :class="`${collapsed ? '' : 'rotate-180'} transition`" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.regular-layout {
  max-width: calc(100% - 32px);
  margin: 16px;
  color: var(--trim-text-color);
  //transition: height 0.25s;
  overflow: hidden;

  .header {
    padding: 12px;
    border-bottom: 1px solid var(--trim-border-color-light);
  }
}

.with-border {
  border: 1px solid var(--trim-border-color-light);
}

.with-bg {
  background-color: var(--trim-bg-color);
}

.with-rounded {
  border-radius: 8px;
}

.with-shadow {
  box-shadow: var(--trim-box-shadow-sm);
}

.opened {
  height: v-bind(elHeight);
}

.btn-collapse {
  background: linear-gradient(to bottom, transparent 0%, var(--trim-bg-color) 100%);
}
</style>
