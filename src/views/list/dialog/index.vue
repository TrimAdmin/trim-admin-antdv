<script setup lang="ts">
import { TableColumnType } from 'ant-design-vue'
import FormDialog from './form-dialog.vue'
import { cloneDeep } from 'lodash'

type searchFormType = {
  username: string
}

type tableDataType = {
  id: number
  name: string
  age: number
  address: string
}

const searchForm = reactive<searchFormType>({} as searchFormType)
const openDialog = ref<boolean>(false)
const dialogRef = shallowRef()
const tableData = ref<Array<tableDataType>>([
  {
    id: 1,
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    id: 2,
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }
])

const columns = ref<Array<TableColumnType>>([
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '操作',
    key: 'operation'
  }
])

function handleEdit(row: tableDataType) {
  openDialog.value = true
  nextTick(() => {
    dialogRef.value.init(row)
  })
}

function handleAdd() {
  openDialog.value = true
}

function handleChangeValue(data: tableDataType, isEdit: boolean) {
  if (isEdit) {
    tableData.value[tableData.value.findIndex((item) => item.id === data.id)] = cloneDeep(data)
  } else {
    console.log(data)
    const newData = cloneDeep(data)
    newData.id = tableData.value.length + 1
    tableData.value.unshift(newData)
  }
}

function handleDelete(row: tableDataType) {
  tableData.value = tableData.value.filter((item) => item.id !== row.id)
}
</script>

<template>
  <div>
    <page-header title="弹窗形式列表" subtitle="轻量表单的首选" />
    <regular-layout>
      <search-panel :model="searchForm" absolute :expand="false">
        <a-form-item label="用户名">
          <a-input v-model:value="searchForm.username" />
        </a-form-item>
      </search-panel>
      <a-button type="primary" @click="handleAdd">新增</a-button>
      <a-table :data-source="tableData" :columns="columns">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'operation'">
            <a-button type="link" @click="handleEdit(record as tableDataType)">编辑</a-button>
            <a-popconfirm title="确认要删除吗？" @confirm="handleDelete(record as tableDataType)">
              <a-button danger type="link">删除</a-button>
            </a-popconfirm>
          </template>
        </template>
      </a-table>
    </regular-layout>
    <form-dialog ref="dialogRef" v-model="openDialog" @confirm="handleChangeValue" />
  </div>
</template>

<style scoped lang="scss"></style>
