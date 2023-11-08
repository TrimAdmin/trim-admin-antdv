<script setup lang="ts">
import { cloneDeep } from 'lodash'

defineProps<{
  modelValue: boolean
}>()

type tableDataType = {
  [index: string]: any
  id: number
  name: string
  age: number
  address: string
}

const emits = defineEmits<{
  'update:modelValue': [value: boolean]
  confirm: [value: tableDataType]
}>()

const formData = reactive<tableDataType>({} as tableDataType)

function init(row: tableDataType) {
  const data = cloneDeep(row)
  Object.keys(data).map((key) => {
    formData[key] = data[key]
  })
}

defineExpose({
  init
})

function handleCancel() {
  emits('update:modelValue', false)
}

function handleConfirm() {
  emits('update:modelValue', false)
  emits('confirm', formData)
}
</script>

<template>
  <draggable-dialog
    centered
    destroy-on-close
    :mask-closable="false"
    :open="modelValue"
    title="编辑人员"
    @cancel="handleCancel"
    @ok="handleConfirm"
  >
    <a-form :model="formData">
      <a-form-item label="姓名">
        <a-input v-model:value="formData.name" />
      </a-form-item>
      <a-form-item label="年龄">
        <a-input v-model:value="formData.age" />
      </a-form-item>
      <a-form-item label="住址">
        <a-input v-model:value="formData.address" />
      </a-form-item>
    </a-form>
    <template #modalRender="{ originVNode }">
      <div v-draggable>
        <component :is="originVNode" />
      </div>
    </template>
  </draggable-dialog>
</template>

<style scoped lang="scss"></style>
