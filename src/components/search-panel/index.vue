<script lang="ts" setup>
import { FormInstance } from 'ant-design-vue'
import { Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    // 是否默认展开
    expand?: boolean
    // 表单布局
    layout?: 'horizontal' | 'vertical' | 'inline'
    // label-col，详见https://antdv.com/components/grid-cn/#col
    labelCol?: object
    // label后的冒号
    colon: boolean
    // form model
    model: any
  }>(),
  {
    expand: false,
    layout: 'horizontal',
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
const opened = ref<boolean>(!props.expand)

onMounted(() => {
  collapsedHeight.value = normalRef.value?.offsetHeight + 'px'
  maxHeight.value = fullRef.value?.offsetHeight + 'px'
  if (props.expand) {
    currentHeight.value = maxHeight.value
  } else {
    currentHeight.value = collapsedHeight.value
  }
})

const emits = defineEmits<{
  refresh: []
  reset: []
}>()

// 提交后触发绑定的刷新事件
function handleSearch() {
  emits('refresh')
}

// 重置表单
function handleReset() {
  formRef.value?.resetFields()
  emits('reset')
}

// 展开面板
function handleExpand() {
  opened.value = !opened.value
  if (opened.value) {
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
  <div class="search-panel">
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
    <div class="flex-bc mt-4">
      <div>
        <a-button type="primary" @click="handleSearch">查询</a-button>
        <a-button @click="handleReset">重置</a-button>
        <slot name="footer" />
      </div>
      <div>
        <a-button type="link" class="flex-c" @click="handleExpand">
          {{ opened ? '展开条件' : '收起条件' }}
          <Icon class="ml-1" icon="ant-design:down-outlined" :class="opened ? '' : 'rotate-180'" />
        </a-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-panel {
  .form {
    height: v-bind(currentHeight);
    overflow: hidden;
    transition: height 0.25s ease;
  }
}

:deep(.ant-form-item) {
  width: 450px;
}

.search-panel-placeholder {
  height: v-bind(currentHeight);
}
</style>
