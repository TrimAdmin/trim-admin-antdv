<script lang="ts" setup>
import { useUserStoreHook } from '@/store'
import { getTimeSlotString } from '@/utils'
import { Icon } from '@iconify/vue'
import Statistic from './components/statistic.vue'
import SaleCharts from './components/sale-charts.vue'
import SearchHot from '@/views/dashboard/analysis/components/search-hot.vue'
import CategoryRate from '@/views/dashboard/analysis/components/category-rate.vue'

const username = computed<string>(() => useUserStoreHook().userInfo.username)
const avatar = computed<string | undefined>(() => useUserStoreHook().userInfo.avatar)
const timeSlot = computed<string>(() => getTimeSlotString())
</script>

<template>
  <div>
    <page-header :title="`${timeSlot}好，${username}`" subtitle="开始今天的工作吧">
      <template #left>
        <a-avatar :size="64" :src="avatar">
          <template #icon>
            <Icon class="cursor-pointer mt-1" icon="ant-design:user-outlined" inline />
          </template>
        </a-avatar>
      </template>
      <template #right>
        <div class="flex gap-4">
          <div>
            <div class="text-red-500">推进中项目</div>
            <div class="text-right text-2xl text-red-600 font-bold">7</div>
          </div>
          <div>
            <div class="text-green-500">已完成项目</div>
            <div class="text-right text-2xl text-green-600 font-bold">4</div>
          </div>
          <div>
            <div class="text-yellow-500">未结算项目</div>
            <div class="text-right text-2xl text-yellow-600 font-bold">2</div>
          </div>
        </div>
      </template>
    </page-header>
    <regular-layout no-background>
      <Statistic class="mb-4" />
      <SaleCharts />
      <div class="grid grid-cols-2 mt-4 gap-4">
        <SearchHot />
        <CategoryRate />
      </div>
    </regular-layout>
  </div>
</template>

<style lang="scss" scoped></style>
