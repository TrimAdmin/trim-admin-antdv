<script lang="ts" setup>
import Card from './card.vue'
</script>

<template>
  <Card title="员工数据">
    <template #right>
      <div class="flex items-center text-[12px] text-[#202020aa] dark:text-gray-200 cursor-pointer">
        刷新
        <Icon icon="ant-design:sync-outlined" class="ml-1" />
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
          <DigitScroll :value="2830" class="text-[16px] font-bold" />
        </div>
        <div class="w-1/2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">兼职</div>
          <DigitScroll :value="17" class="text-[16px] font-bold" />
        </div>
        <div class="w-1/2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">实习</div>
          <DigitScroll :value="46" class="text-[16px] font-bold" />
        </div>
        <div class="w-1/2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">外包</div>
          <DigitScroll :value="80" class="text-[16px] font-bold" />
        </div>
      </div>
      <div class="flex-1 ml-4 flex flex-wrap">
        <div class="w-1/2 mb-2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">试用</div>
          <DigitScroll :value="32" class="text-[16px] font-bold" />
        </div>
        <div class="w-1/2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">正式</div>
          <DigitScroll :value="2710" class="text-[16px] font-bold" />
        </div>
        <div class="w-1/2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">待离职</div>
          <DigitScroll :value="18" class="text-[16px] font-bold" />
        </div>
        <div class="w-1/2">
          <div class="text-[12px] text-gray-500 dark:text-gray-200">空闲</div>
          <DigitScroll :value="5" class="text-[16px] font-bold" />
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
.border-x {
  border-left: 1px solid rgba(100, 100, 100, 0.2);
  border-right: 1px solid rgba(100, 100, 100, 0.2);
}
</style>
