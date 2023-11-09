<script lang="ts" setup>
import { FormInstance } from 'ant-design-vue'
import { Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    // 是否默认展开
    defaultExpand?: boolean
    // 表单布局
    layout?: 'horizontal' | 'vertical' | 'inline'
    // label-col，详见https://antdv.com/components/grid-cn/#col
    labelCol?: object
    // label后的冒号
    colon?: boolean
    // 是否absolute布局
    absolute?: boolean
    // 是否需要展开按钮
    expand?: boolean
    // 无背景
    transparent?: boolean
    // form model
    model: any
  }>(),
  {
    expand: true,
    defaultExpand: false,
    layout: 'inline',
    colon: false,
    labelCol: () => ({
      span: '6'
    })
  }
)

const normalRef = shallowRef<HTMLDivElement>()
const fullRef = shallowRef<HTMLDivElement>()
const formRef = shallowRef<FormInstance>()
const collapsedHeight = ref<string>()
const maxHeight = ref<string>()
const currentHeight = ref<string>()
// 是否收起
const collapsed = ref<boolean>(!props.defaultExpand)

onMounted(() => {
  collapsedHeight.value = normalRef.value?.offsetHeight + 'px'
  maxHeight.value = fullRef.value?.offsetHeight + 'px'
  handleCollapse(!props.defaultExpand && props.expand)

  window.addEventListener('resize', () => {
    collapsedHeight.value = normalRef.value?.offsetHeight + 'px'
    maxHeight.value = fullRef.value?.offsetHeight + 'px'
    handleCollapse(collapsed.value)
  })
})

const emits = defineEmits<{
  search: []
  reset: []
}>()

function handleCollapse(collapsed: boolean) {
  if (collapsed) {
    currentHeight.value = collapsedHeight.value
  } else {
    currentHeight.value = maxHeight.value
  }
}

watch(
  () => collapsed.value,
  (newVal) => {
    handleCollapse(newVal)
  }
)

// 提交后触发绑定的刷新事件
function handleSearch() {
  collapsed.value = true
  emits('search')
}

// 重置表单
function handleReset() {
  collapsed.value = true
  formRef.value?.resetFields()
  emits('reset')
}

// 展开面板
function handleExpand() {
  collapsed.value = !collapsed.value
  if (collapsed.value) {
    currentHeight.value = collapsedHeight.value
  } else {
    currentHeight.value = maxHeight.value
  }
}

defineExpose<{
  formRef: Ref<FormInstance>
}>()
</script>

<template>
  <div :class="`search-panel overflow-hidden ${absolute ? 'with-absolute' : ''} ${transparent ? '' : 'with-bg'}`">
    <a-form ref="formRef" class="form" :model="model" :label-col="labelCol" :layout="layout" :colon="colon">
      <div ref="fullRef">
        <div ref="normalRef" class="normal">
          <slot />
        </div>
        <div class="flex w-full flex-wrap">
          <slot name="expanded" />
        </div>
      </div>
    </a-form>
    <div :class="`flex-bc mt-4 px-4 transition transition-duration-300 h-16 ${!collapsed ? 'with-shadow' : ''}`">
      <div>
        <a-button type="primary" ghost @click="handleSearch">查询</a-button>
        <a-button @click="handleReset">重置</a-button>
        <slot name="footer" />
      </div>
      <div v-if="expand">
        <a-button type="link" class="flex-c" @click="handleExpand">
          {{ collapsed ? '展开条件' : '收起条件' }}
          <Icon class="ml-1" icon="ant-design:down-outlined" :class="collapsed ? '' : 'rotate-180'" />
        </a-button>
      </div>
    </div>
  </div>
  <div v-if="absolute" class="search-panel-placeholder"></div>
</template>

<style scoped lang="scss">
.search-panel {
  padding-top: 24px;

  .form {
    height: v-bind(currentHeight);
    padding: 0 24px;
    overflow: hidden;
    transition: height 0.25s ease;
  }
}

.with-bg {
  background-color: #f5f7fa;
  border: 1px solid var(--antdv-color-border);
}

.dark .with-bg {
  background-color: var(--antdv-color-bg-elevated);
}

.with-absolute {
  position: absolute;
  z-index: 900;
  width: calc(100% - 3rem);
}

.with-shadow {
  box-shadow: 0 -2px 10px rgb(0 0 0 / 8%);
}

.dark .with-shadow {
  box-shadow: 0 -2px 10px rgb(255 255 255 / 15%);
}

:deep(.ant-form-item) {
  width: 450px;
}

.search-panel-placeholder {
  height: calc(v-bind(collapsedHeight) + 120px);
}
</style>
