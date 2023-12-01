<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'
import { useToast, useVxeTableDrag } from '@/hooks'
import { getCheckedRows } from '@/utils'

const tableRef = shallowRef<VxeGridInstance>({} as VxeGridInstance)

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

// 模拟分页接口
const findPageList = (currentPage: number, pageSize: number) => {
  return new Promise<{
    page: {
      total: number
    }
    result: RowVO[]
  }>((resolve) => {
    setTimeout(() => {
      const list = [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
        { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
        { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' },
        { id: 100011, name: 'Test11', nickname: 'T11', role: 'Test', sex: 'Women', age: 26, address: 'test abc' },
        { id: 100012, name: 'Test12', nickname: 'T12', role: 'Develop', sex: 'Man', age: 34, address: 'Guangzhou' },
        { id: 100013, name: 'Test13', nickname: 'T13', role: 'Test', sex: 'Women', age: 22, address: 'Shenzhen' }
      ]
      resolve({
        page: {
          total: list.length
        },
        result: list.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      })
    }, 100)
  })
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  height: 530,
  rowConfig: {
    keyField: 'id'
  },
  columnConfig: {
    useKey: true
  },
  toolbarConfig: {
    enabled: true,
    refresh: true,
    custom: true,
    slots: {
      buttons: 'buttons'
    }
  },
  pagerConfig: {
    enabled: true,
    pageSize: 10
  },
  columns: [
    { type: 'checkbox', width: 50, fixed: 'left', resizable: false },
    { type: 'seq', width: 60, fixed: 'left', resizable: false },
    { field: 'name', title: 'Name' },
    { field: 'nickname', title: 'Nickname' },
    { field: 'role', title: 'Role' },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  proxyConfig: {
    seq: true, // 启用动态序号代理（分页之后索引自动计算为当前页的起始序号）
    props: {
      result: 'result',
      total: 'page.total'
    },
    ajax: {
      // 接收 Promise
      query: ({ page }) => {
        return findPageList(page.currentPage, page.pageSize)
      }
    }
  }
})

function handleAdd() {
  useToast().message.info('点击新增')
}

function handleDelete() {
  if (!getCheckedRows(tableRef).length) {
    useToast().message.info('请先选择需要删除的数据')
    return
  }
  useToast().message.info('点击批量删除')
}

onMounted(() => {
  useVxeTableDrag(tableRef)
})
</script>

<template>
  <div>
    <page-header title="Vxe Table基础示例" subtitle="高度定制化的表格组件，已封装列拖拽函数和适配暗色模式" />
    <a-alert banner class="mb-4" type="info">
      <template #message>
        官方文档：
        <a href="https://vxetable.cn" target="_blank"> https://vxetable.cn </a>
      </template>
    </a-alert>
    <regular-layout>
      <vxe-grid v-bind="gridOptions" ref="tableRef">
        <template #buttons>
          <a-button type="primary" @click="handleAdd">新增</a-button>
          <a-button danger @click="handleDelete">批量删除</a-button>
        </template>
      </vxe-grid>
    </regular-layout>
  </div>
</template>

<style lang="scss" scoped></style>
