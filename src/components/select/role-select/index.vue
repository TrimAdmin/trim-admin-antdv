<script lang="ts" setup>
import { roleList } from '@/mock'
import { SelectValue } from 'ant-design-vue/es/select'

defineProps<{
  modelValue: SelectValue
  disabled?: boolean
  placeholder?: string
}>()

const emits = defineEmits<{
  'update:modelValue': [value: SelectValue]
}>()

function handleChange(value: SelectValue) {
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
