<script setup lang="ts">
import { SelectProps } from 'ant-design-vue/lib'
import { useIcon } from '@/hooks'

const options1 = ref<SelectProps['options']>([
  {
    value: 'jack',
    label: 'Jack'
  },
  {
    value: 'lucy',
    label: 'Lucy'
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true
  },
  {
    value: 'yiminghe',
    label: 'Yiminghe'
  }
])

const value1 = ref<string>()
const value2 = ref<string[]>()
const value3 = ref<string>()
const value4 = ref<string>()
const value5 = ref<string>()
</script>

<template>
  <div>
    <regular-layout>
      <a-divider orientation="left" plain>基本使用</a-divider>
      <a-select v-model:value="value1" :options="options1" class="w-[220px]" placeholder="请选择" />
      <a-divider orientation="left" plain>多选</a-divider>
      <a-select
        v-model:value="value2"
        :max-tag-count="1"
        mode="multiple"
        :options="options1"
        class="w-[220px]"
        placeholder="请选择"
      />
      <a-divider orientation="left" plain>可搜索</a-divider>
      <a-select v-model:value="value3" show-search :options="options1" class="w-[220px]" placeholder="请选择" />
      <a-divider orientation="left" plain>后缀图标</a-divider>
      <a-select
        v-model:value="value4"
        :suffix-icon="useIcon('ant-design:compass-outlined')"
        :options="options1"
        class="w-[220px]"
        placeholder="请选择"
      />
      <a-divider orientation="left" plain>扩展菜单</a-divider>
      <a-select v-model:value="value5" :options="options1" class="w-[220px]" placeholder="请选择">
        <template #dropdownRender="{ menuNode: menu }">
          <component :is="menu" />
          <a-divider class="px-1 my-2" plain />
          <a-input-search class="px-1 mb-2" placeholder="请输入" />
        </template>
      </a-select>
    </regular-layout>
  </div>
</template>

<style scoped></style>
