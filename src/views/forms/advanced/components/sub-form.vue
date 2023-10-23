<script lang="ts" setup>
import { TableColumnProps } from 'ant-design-vue'
import { itemType } from '@/views/forms/advanced/types'

const itemColumns = ref<Array<TableColumnProps>>([
  {
    title: '物品编号',
    dataIndex: 'serialNumber',
    key: 'serialNumber',
    width: 300
  },
  {
    title: '物品名称',
    dataIndex: 'name',
    key: 'name',
    width: 300
  },
  {
    title: '物品数量',
    dataIndex: 'count',
    key: 'count',
    width: 240
  },
  {
    title: '操作',
    dataIndex: 'operation'
  }
])

const formObj = ref<Array<itemType>>([
  {
    serialNumber: '231007',
    name: '测试物品1',
    count: 20,
    editing: false
  }
])

function handleSaveItem(index: number) {
  formObj.value[index].editing = false
}

function handleEditItem(index: number) {
  formObj.value[index].editing = true
}

function handleAddItem() {
  formObj.value.push({
    serialNumber: '',
    name: '',
    count: 0,
    editing: true
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
    <a-table :columns="itemColumns" :data-source="formObj">
      <template #bodyCell="{ column, index }">
        <template v-if="column.dataIndex === 'count'">
          <a-input-number
            v-if="formObj[index].editing"
            v-model:value="formObj[index][column.dataIndex]"
            class="w-full"
          ></a-input-number>
          <span v-else>{{ formObj[index][column.dataIndex] }}</span>
        </template>
        <template v-else-if="column.dataIndex === 'serialNumber' || column.dataIndex === 'name'">
          <a-input v-if="formObj[index].editing" v-model:value="formObj[index][column.dataIndex]"></a-input>
          <span v-else>{{ formObj[index][column.dataIndex] }}</span>
        </template>
        <template v-else>
          <a-button v-if="formObj[index].editing" type="link" @click="handleSaveItem(index)">保存</a-button>
          <a-button v-else type="link" @click="handleEditItem(index)">编辑</a-button>
          <a-button danger type="link" @click="handleRemoveItem(index)">删除</a-button>
        </template>
      </template>
    </a-table>
    {{ formObj }}
  </a-card>
</template>

<style lang="scss" scoped></style>
