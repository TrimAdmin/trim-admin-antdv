<script lang="ts" setup>
import { TableColumnProps } from 'ant-design-vue'

defineOptions({
  name: 'forms-advanced'
})

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

type formObjType = {
  serialNumber: string
  name: string
  parentCategory: number
  packageType: number
  brand: string
  netWeight: number
  netWeightUnit: string
  itemList: Array<itemType>
}

type itemType = {
  serialNumber: string
  name: string
  count: number
}

const itemColumns = ref<Array<TableColumnProps>>([
  {
    title: '物品编号',
    dataIndex: 'serialNumber',
    key: 'serialNumber'
  },
  {
    title: '物品名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '物品数量',
    dataIndex: 'count',
    key: 'count'
  },
  {
    title: '操作',
    dataIndex: 'operation'
  }
])

const formObj = reactive<formObjType>({
  packageType: 0,
  netWeightUnit: 'g',
  itemList: [] as Array<itemType>
} as formObjType)

function handleAddItem() {
  formObj.itemList.push({
    serialNumber: '',
    name: '',
    count: 0
  } as itemType)
}
</script>

<template>
  <LayoutWithHeader title="高级表单" subtitle="表单的高级用法" fixed-footer no-background>
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
    <a-card title="物品信息" class="mb-4">
      <template #extra>
        <a-button type="primary" @click="handleAddItem">新增一项</a-button>
      </template>
      <a-table :data-source="formObj.itemList" :columns="itemColumns">
        <template #bodyCell="{ column, index }">
          <template v-if="column.dataIndex === 'count'">
            <a-input-number v-model:value="formObj.itemList[index][column.dataIndex]" class="w-full"></a-input-number>
          </template>
          <template v-else-if="column.dataIndex === 'serialNumber' || column.dataIndex === 'name'">
            <a-input v-model:value="formObj.itemList[index][column.dataIndex]"></a-input>
          </template>
          <template v-else>
            <a-button type="link" danger>删除</a-button>
          </template>
        </template>
      </a-table>
      {{ formObj.itemList }}
    </a-card>
    <template #fixed-footer>
      <a-button type="primary">提交</a-button>
      <a-button>取消</a-button>
    </template>
  </LayoutWithHeader>
</template>

<style scoped lang="scss"></style>
