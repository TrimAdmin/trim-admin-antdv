<script setup lang="ts">
import { CheckboxGroupProps } from 'ant-design-vue'

const value1 = ref<string[]>(['Apple'])
const value2 = ref<string[]>(['Apple'])
const value3 = ref<string[]>(['Apple'])
const value4 = ref<string[]>(['Apple'])

const plainOptions = ['Apple', 'Pear', 'Orange']
const optionsWithDisabled: CheckboxGroupProps['options'] = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true }
]
const checkAll = ref<boolean>(false)
const indeterminate = ref<boolean>(false)

function onCheckAllChange(e: any) {
  value4.value = e.target.checked ? plainOptions : []
  indeterminate.value = false
}

watch(
  () => value4.value,
  (newVal: string[]) => {
    indeterminate.value = !!newVal.length && newVal.length < plainOptions.length
    checkAll.value = newVal.length === plainOptions.length
  }
)
</script>

<template>
  <div>
    <regular-layout>
      <a-divider orientation="left" plain>基本用法</a-divider>
      <a-checkbox-group v-model:value="value1" :options="plainOptions" />
      <a-divider orientation="left" plain>选项禁用</a-divider>
      <a-checkbox-group v-model:value="value2" :options="optionsWithDisabled" />
      <a-divider orientation="left" plain>分组禁用</a-divider>
      <a-checkbox-group v-model:value="value3" :options="plainOptions" disabled />
      <a-divider orientation="left" plain>全选效果</a-divider>
      <a-checkbox v-model:checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">
        全选
      </a-checkbox>
      <a-checkbox-group v-model:value="value4" :options="plainOptions" />
    </regular-layout>
  </div>
</template>

<style scoped></style>
