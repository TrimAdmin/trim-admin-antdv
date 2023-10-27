<script lang="ts" setup>
import { searchFormType } from './types'

const searchForm = reactive<searchFormType>({} as searchFormType)
</script>

<template>
  <div>
    <page-header title="搜索面板" subtitle="列表常用的搜索组件" />
    <regular-layout>
      <search-panel layout="horizontal" :model="searchForm">
        <a-form-item label="用户名/工号">
          <a-input placeholder="请输入用户名/工号" />
        </a-form-item>
        <template #expanded>
          <a-form-item label="部门">
            <department-select v-model="searchForm.departmentId" />
          </a-form-item>
          <a-form-item label="角色">
            <role-select v-model="searchForm.roleId" />
          </a-form-item>
          <a-form-item label="部门">
            <a-select placeholder="请选择部门" />
          </a-form-item>
        </template>
      </search-panel>
      {{ searchForm }}
    </regular-layout>
  </div>
</template>

<style scoped lang="scss"></style>
