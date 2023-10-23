<script lang="ts" setup>
import Card from './card.vue'
</script>

<template>
  <Card title="员工数据">
    <template #right>
      <div class="flex items-center text-[12px] text-[#202020aa] dark:text-gray-200 cursor-pointer">
        刷新
        <Icon class="ml-1" icon="ant-design:sync-outlined" />
      </div>
    </template>
    <div class="flex-bc">
      <div class="w-1/4">
        <div class="text-[12px] text-gray-500 dark:text-gray-200">员工人数</div>
        <DigitScroll :value="3345" class="text-[#186DF5] text-[24px] font-bold" />
      </div>
      <div class="flex-1 border-x px-4 flex flex-wrap">
        <div class="w-1/2 mb-2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">全职</div>
          <div class="text-[16px] font-bold">2,830</div>
        </div>
        <div class="w-1/2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">兼职</div>
          <div class="text-[16px] font-bold">17</div>
        </div>
        <div class="w-1/2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">实习</div>
          <div class="text-[16px] font-bold">46</div>
        </div>
        <div class="w-1/2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">外包</div>
          <div class="text-[16px] font-bold">80</div>
        </div>
      </div>
      <div class="flex-1 ml-4 flex flex-wrap">
        <div class="w-1/2 mb-2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">试用</div>
          <div class="text-[16px] font-bold">32</div>
        </div>
        <div class="w-1/2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">正式</div>
          <div class="text-[16px] font-bold">2,710</div>
        </div>
        <div class="w-1/2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">待离职</div>
          <div class="text-[16px] font-bold">18</div>
        </div>
        <div class="w-1/2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">空闲</div>
          <div class="text-[16px] font-bold">5</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.border-x {
  border-right: 1px solid rgb(100 100 100 / 20%);
  border-left: 1px solid rgb(100 100 100 / 20%);
}
</style>
