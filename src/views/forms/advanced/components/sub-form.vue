<script lang="ts" setup>
import { TableColumnProps } from 'ant-design-vue'
import { itemType } from '@/views/forms/advanced/types'

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

const formObj = ref<Array<itemType>>([])

function handleAddItem() {
  formObj.value.push({
    serialNumber: '',
    name: '',
    count: 0
  } as itemType)
}

function handleRemoveItem(index: number) {
  formObj.value.splice(index, 1)
}
</script>

<template>
  <a-card title="物品信息">
    <template #extra>
      <a-button type="primary" @click="handleAddItem">新增一项</a-button>
    </template>
    <a-table :data-source="formObj" :columns="itemColumns">
      <template #bodyCell="{ column, index }">
        <template v-if="column.dataIndex === 'count'">
          <a-input-number v-model:value="formObj[index][column.dataIndex]" class="w-full"></a-input-number>
        </template>
        <template v-else-if="column.dataIndex === 'serialNumber' || column.dataIndex === 'name'">
          <a-input v-model:value="formObj[index][column.dataIndex]"></a-input>
        </template>
        <template v-else>
          <a-button type="link">保存</a-button>
          <a-button type="link" danger @click="handleRemoveItem(index)">删除</a-button>
        </template>
      </template>
    </a-table>
    {{ formObj }}
  </a-card>
</template>

<style scoped lang="scss"></style>
