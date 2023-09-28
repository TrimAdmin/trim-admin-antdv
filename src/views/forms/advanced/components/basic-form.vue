<script lang="ts" setup>
import { formObjType } from '@/views/forms/advanced/types'

const categoryList = ref<
  Array<{
    label: string
    value: number
  }>
>([
  {
    label: '食品',
    value: 0
  },
  {
    label: '日用品',
    value: 1
  },
  {
    label: '床上用品',
    value: 2
  },
  {
    label: '电子产品',
    value: 3
  },
  {
    label: '家具家装',
    value: 4
  }
])

const formObj = reactive<formObjType>({
  packageType: 0,
  netWeightUnit: 'g'
} as formObjType)
</script>

<template>
  <a-card title="分类信息" class="mb-4">
    <a-form
      :colon="false"
      :model="formObj"
      :label-col="{
        style: {
          width: '80px'
        }
      }"
    >
      <a-row :gutter="12">
        <a-col :span="8">
          <a-form-item label="生产编号">
            <a-input v-model:value="formObj.serialNumber" class="w-full" placeholder="请输入生产编号"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="分类名称">
            <a-input v-model:value="formObj.name" class="w-full" placeholder="请输入分类名称"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="父级分类">
            <a-select v-model:value="formObj.parentCategory" :options="categoryList" class="w-full" placeholder="请选择父级分类"></a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="包装种类">
            <a-radio-group v-model:value="formObj.packageType">
              <a-radio :value="0">袋装</a-radio>
              <a-radio :value="1">桶装</a-radio>
              <a-radio :value="2">箱装</a-radio>
              <a-radio :value="3">散装</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="品牌">
            <a-input v-model:value="formObj.brand" class="w-full" placeholder="请输入品牌"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="净含量">
            <a-input-number v-model:value="formObj.netWeight" class="w-full" placeholder="请输入净含量">
              <template #addonAfter>
                <a-select v-model:value="formObj.netWeightUnit" style="width: 80px">
                  <a-select-option value="g">g</a-select-option>
                  <a-select-option value="kg">kg</a-select-option>
                  <a-select-option value="jin">市斤</a-select-option>
                  <a-select-option value="liang">市两</a-select-option>
                </a-select>
              </template>
            </a-input-number>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
</template>

<style scoped lang="scss"></style>
