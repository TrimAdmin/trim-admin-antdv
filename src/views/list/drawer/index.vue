<script setup lang="ts">
import { TableColumnType } from 'ant-design-vue'
import FormDrawer from './form-drawer.vue'
import { cloneDeep } from 'lodash'

type searchFormType = {
  username?: string
}

type tableDataType = {
  id: number
  name: string
  age: number
  address: string
}

const searchForm = reactive<searchFormType>({} as searchFormType)
const openDialog = ref<boolean>(false)
const drawerRef = shallowRef()
const originTableData = ref<Array<tableDataType>>([
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
const tableData = ref<Array<tableDataType>>(originTableData.value)
const loading = ref<boolean>(false)

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
    drawerRef.value.init(row)
  })
}

function handleAdd() {
  openDialog.value = true
}

function handleChangeValue(data: tableDataType, isEdit: boolean) {
  if (isEdit) {
    originTableData.value[originTableData.value.findIndex((item) => item.id === data.id)] = cloneDeep(data)
  } else {
    // console.log(data)
    const newData = cloneDeep(data)
    newData.id = originTableData.value.length + 1
    originTableData.value.unshift(newData)
  }
}

function handleDelete(row: tableDataType) {
  originTableData.value = originTableData.value.filter((item) => item.id !== row.id)
  tableData.value = originTableData.value
}

function handleSearch() {
  if (searchForm.username === undefined) return
  loading.value = true
  setTimeout(() => {
    tableData.value = originTableData.value.filter((item) => item.name === searchForm.username)
    loading.value = false
  }, 500)
}

function handleReset() {
  if (searchForm.username === undefined) return
  searchForm.username = undefined
  loading.value = true
  setTimeout(() => {
    tableData.value = originTableData.value
    loading.value = false
  }, 500)
}
</script>

<template>
  <div>
    <page-header title="抽屉形式列表" subtitle="普通表单常用" />
    <regular-layout>
      <search-panel :model="searchForm" absolute :expand="false" @search="handleSearch" @reset="handleReset">
        <a-form-item label="用户名">
          <a-input v-model:value="searchForm.username" />
        </a-form-item>
      </search-panel>
      <a-button type="primary" @click="handleAdd">新增</a-button>
      <a-table :data-source="tableData" :columns="columns" :loading="loading">
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
    <form-drawer ref="drawerRef" v-model="openDialog" @confirm="handleChangeValue" />
  </div>
</template>

<style scoped lang="scss"></style>
