<script lang="ts" setup>
import { formObjType } from './types'

defineOptions({
  name: 'forms-basic'
})

const formRef = shallowRef()
const formObj = reactive<formObjType>({
  name: '',
  sex: 1,
  type: 1,
  timeRange: [],
  turboMode: false,
  fruit: [2, 3],
  introduction: ''
})

const typeOptions = ref<
  Array<{
    label: string
    value: number
  }>
>([
  {
    label: '类型1',
    value: 1
  },
  {
    label: '类型2',
    value: 2
  },
  {
    label: '类型3',
    value: 3
  }
])

const fruitOptions = ref<
  Array<{
    label: string
    value: number
  }>
>([
  {
    label: '苹果',
    value: 1
  },
  {
    label: '香蕉',
    value: 2
  },
  {
    label: '西瓜',
    value: 3
  },
  {
    label: '葡萄',
    value: 4
  },
  {
    label: '草莓',
    value: 5
  }
])
</script>

<template>
  <LayoutWithHeader title="基础表单" subtitle="表单的基础用法" fixed-footer>
    <a-form
      ref="formRef"
      :colon="false"
      layout="horizontal"
      class="mx-auto max-w-[600px]"
      label-align="right"
      :label-col="{
        style: {
          width: '120px'
        }
      }"
    >
      <a-form-item label="姓名">
        <a-input v-model:value="formObj.name" placeholder="请输入姓名" allow-clear />
      </a-form-item>
      <a-form-item label="性别">
        <a-radio-group v-model:value="formObj.sex">
          <a-radio :value="1">男</a-radio>
          <a-radio :value="2">女</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="类型">
        <a-select v-model:value="formObj.type" placeholder="请选择类型" :options="typeOptions" allow-clear />
      </a-form-item>
      <a-form-item label="水果">
        <a-checkbox-group v-model:value="formObj.fruit" :options="fruitOptions" allow-clear />
      </a-form-item>
      <a-form-item label="时间">
        <a-range-picker v-model="formObj.timeRange" :placeholder="['请选择开始时间', '请选择结束时间']" allow-clear class="w-full" />
      </a-form-item>
      <a-form-item label="开启极速模式">
        <a-switch v-model:checked="formObj.turboMode" />
      </a-form-item>
      <a-form-item label="个人简介">
        <a-textarea v-model:value="formObj.introduction" placeholder="请输入个人简介" allow-clear />
      </a-form-item>
    </a-form>
    <template #fixed-footer>
      <a-button type="primary">提交</a-button>
      <a-button>取消</a-button>
    </template>
  </LayoutWithHeader>
</template>

<style scoped lang="scss"></style>
