<script setup lang="ts">
import { RadioGroupProps } from 'ant-design-vue'

const value1 = ref<string>('Apple')
const value2 = ref<string>('Apple')
const value3 = ref<string>('Apple')
const value4 = ref<string>('Apple')

const plainOptions = ['Apple', 'Pear', 'Orange']
const optionsWithDisabled: RadioGroupProps['options'] = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true }
]
</script>

<template>
  <div>
    <regular-layout>
      <a-divider orientation="left" plain>基本用法</a-divider>
      <a-radio-group v-model:value="value1" :options="plainOptions" />
      <a-divider orientation="left" plain>选项禁用</a-divider>
      <a-radio-group v-model:value="value2" :options="optionsWithDisabled" />
      <a-divider orientation="left" plain>分组禁用</a-divider>
      <a-radio-group v-model:value="value3" :options="plainOptions" disabled />
      <a-divider orientation="left" plain>按钮样式</a-divider>
      <div class="flex flex-col">
        <a-radio-group
          v-model:value="value4"
          class="mb-4"
          option-type="button"
          button-style="solid"
          :options="plainOptions"
        />
        <a-radio-group v-model:value="value4" option-type="button" button-style="outline" :options="plainOptions" />
      </div>
    </regular-layout>
  </div>
</template>

<style scoped></style>
