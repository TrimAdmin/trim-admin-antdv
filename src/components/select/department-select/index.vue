<script lang="ts" setup>
import { departmentList } from '@/mock'
import type { ValueType } from 'ant-design-vue/es/vc-cascader/Cascader'

defineProps<{
  modelValue: Array<string | number>
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
  <a-cascader
    :value="modelValue"
    :placeholder="placeholder || '请选择部门'"
    :options="departmentList"
    change-on-select
    :disabled="disabled"
    show-search
    @change="handleChange"
  />
</template>

<style scoped lang="scss"></style>
