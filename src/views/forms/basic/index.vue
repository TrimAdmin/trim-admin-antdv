<script lang="ts" setup>
import { formObjType } from './types'
import { typeOptions, fruitOptions } from './data'
import { handleCloseTag } from '@/router/utils.ts'

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
</script>

<template>
  <div>
    <page-header subtitle="表单的基础用法" title="基础表单" />
    <regular-layout>
      <a-form
        ref="formRef"
        :colon="false"
        :label-col="{
          style: {
            width: '120px'
          }
        }"
        class="mx-auto max-w-[600px]"
        label-align="right"
        layout="horizontal"
      >
        <a-form-item label="姓名">
          <a-input v-model:value="formObj.name" allow-clear placeholder="请输入姓名" />
        </a-form-item>
        <a-form-item label="性别">
          <a-radio-group v-model:value="formObj.sex">
            <a-radio :value="1">男</a-radio>
            <a-radio :value="2">女</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="类型">
          <a-select v-model:value="formObj.type" :options="typeOptions" allow-clear placeholder="请选择类型" />
        </a-form-item>
        <a-form-item label="水果">
          <a-checkbox-group v-model:value="formObj.fruit" :options="fruitOptions" allow-clear />
        </a-form-item>
        <a-form-item label="时间">
          <a-range-picker
            v-model="formObj.timeRange"
            :placeholder="['请选择开始时间', '请选择结束时间']"
            allow-clear
            class="w-full"
          />
        </a-form-item>
        <a-form-item label="开启极速模式">
          <a-switch v-model:checked="formObj.turboMode" />
        </a-form-item>
        <a-form-item label="个人简介">
          <a-textarea v-model:value="formObj.introduction" allow-clear placeholder="请输入个人简介" />
        </a-form-item>
      </a-form>
    </regular-layout>
    <fixed-footer>
      <a-button type="primary">提交</a-button>
      <a-button @click="handleCloseTag($route.name!.toString(), '确认要取消吗？')">取消</a-button>
    </fixed-footer>
  </div>
</template>

<style lang="scss" scoped></style>
