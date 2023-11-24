<script setup lang="ts">
import { cloneDeep } from 'lodash'
import { FormInstance } from 'ant-design-vue'

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
  confirm: [value: tableDataType, isEdit: boolean]
}>()

const formRef = shallowRef<FormInstance>()
const formData = reactive<tableDataType>({} as tableDataType)
const isEdit = ref<boolean>(false)
const loading = ref<boolean>(false)
const formRules = {
  name: [
    {
      required: true,
      message: '请输入姓名'
    }
  ],
  age: [
    {
      required: true,
      message: '请输入年龄'
    }
  ],
  address: [
    {
      required: true,
      message: '请输入地址'
    }
  ]
}

function init(row: tableDataType) {
  isEdit.value = true
  const data = cloneDeep(row)
  Object.keys(data).map((key) => {
    formData[key] = data[key]
  })
}

defineExpose({
  init
})

function handleClose() {
  isEdit.value = false
  emits('update:modelValue', false)
  formRef.value?.resetFields()
  Object.keys(formData).forEach((key) => {
    formData[key] = undefined
  })
}

async function handleConfirm() {
  if (await formRef.value?.validate()) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      emits('confirm', formData, isEdit.value)
      handleClose()
    }, 500)
  }
}
</script>

<template>
  <a-drawer :mask-closable="false" :open="modelValue" :title="isEdit ? '编辑人员' : '新增人员'" @close="handleClose">
    <a-form ref="formRef" :model="formData" :rules="formRules">
      <a-form-item label="姓名" name="name">
        <a-input v-model:value="formData.name" />
      </a-form-item>
      <a-form-item label="年龄" name="age">
        <a-input v-model:value="formData.age" />
      </a-form-item>
      <a-form-item label="住址" name="address">
        <a-input v-model:value="formData.address" />
      </a-form-item>
    </a-form>
    <template #footer>
      <a-button type="primary" :loading="loading" @click="handleConfirm">确认</a-button>
      <a-button @click="handleClose">取消</a-button>
    </template>
  </a-drawer>
</template>

<style scoped lang="scss"></style>
