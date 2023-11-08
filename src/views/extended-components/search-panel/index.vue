<script lang="ts" setup>
import { searchFormType } from './types'

const searchForm = reactive<searchFormType>({} as searchFormType)

// 重置搜索
function handleReset() {
  Object.keys(searchForm).map((key) => {
    searchForm[key] = undefined
  })
}
</script>

<template>
  <div>
    <page-header title="搜索面板" subtitle="列表常用的搜索组件" />
    <regular-layout title="默认样式">
      <search-panel layout="horizontal" :model="searchForm" @reset="handleReset">
        <a-form-item label="用户名/工号">
          <a-input v-model:value="searchForm.key" placeholder="请输入用户名/工号" />
        </a-form-item>
        <template #expanded>
          <a-form-item label="部门">
            <department-select v-model="searchForm.departmentId" />
          </a-form-item>
          <a-form-item label="角色">
            <role-select v-model="searchForm.roleId" />
          </a-form-item>
          <a-form-item label="用户状态">
            <a-radio-group v-model:value="searchForm.status">
              <a-radio :value="1">启用</a-radio>
              <a-radio :value="0">停用</a-radio>
            </a-radio-group>
          </a-form-item>
        </template>
      </search-panel>
    </regular-layout>
    <regular-layout title="默认展开">
      <search-panel layout="horizontal" :model="searchForm" default-expand @reset="handleReset">
        <a-form-item label="用户名/工号">
          <a-input v-model:value="searchForm.key" placeholder="请输入用户名/工号" />
        </a-form-item>
        <template #expanded>
          <a-form-item label="部门">
            <department-select v-model="searchForm.departmentId" />
          </a-form-item>
          <a-form-item label="角色">
            <role-select v-model="searchForm.roleId" />
          </a-form-item>
          <a-form-item label="用户状态">
            <a-radio-group v-model:value="searchForm.status">
              <a-radio :value="1">启用</a-radio>
              <a-radio :value="0">停用</a-radio>
            </a-radio-group>
          </a-form-item>
        </template>
      </search-panel>
    </regular-layout>
    <regular-layout title="隐藏展开/收起按钮">
      <search-panel layout="horizontal" :model="searchForm" :expand="false" @reset="handleReset">
        <a-form-item label="用户名/工号">
          <a-input v-model:value="searchForm.key" placeholder="请输入用户名/工号" />
        </a-form-item>
        <template #expanded>
          <a-form-item label="部门">
            <department-select v-model="searchForm.departmentId" />
          </a-form-item>
          <a-form-item label="角色">
            <role-select v-model="searchForm.roleId" />
          </a-form-item>
          <a-form-item label="用户状态">
            <a-radio-group v-model:value="searchForm.status">
              <a-radio :value="1">启用</a-radio>
              <a-radio :value="0">停用</a-radio>
            </a-radio-group>
          </a-form-item>
        </template>
      </search-panel>
    </regular-layout>
    <regular-layout>
      {{ searchForm }}
    </regular-layout>
  </div>
</template>

<style scoped lang="scss"></style>
