<script lang="ts" setup>
import { roleList } from '@/mock'
import type { ValueType } from 'ant-design-vue/es/vc-cascader/Cascader'

defineProps<{
  modelValue: ValueType
  disabled?: boolean
  placeholder?: string
}>()

const emits = defineEmits<{
  'update:modelValue': [value: ValueType]
}>()

function handleChange(value: ValueType) {
  // console.log(value)
  emits('update:modelValue', value)
}
</script>

<template>
  <a-select
    :value="modelValue"
    :placeholder="placeholder || '请选择角色'"
    :disabled="disabled"
    :options="roleList"
    show-search
    @change="handleChange"
  />
</template>

<style scoped lang="scss"></style>
