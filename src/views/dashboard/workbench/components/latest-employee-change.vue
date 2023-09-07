<script lang="ts" setup>
import Card from './card.vue'

const typeList = ref<Array<string>>(['新增人员', '离职人员'])
const currentType = ref<string>(typeList.value[0])
const peopleList = ref<
  Array<{
    name: string
    position: string
    time: string
  }>
>([
  {
    name: '张三',
    position: '法律顾问',
    time: '05/13'
  },
  {
    name: '李四',
    position: '委托律师',
    time: '05/16'
  },
  {
    name: '张士超',
    position: '我家钥匙放哪了',
    time: '05/21'
  },
  {
    name: '月夜枫',
    position: '水产市场胖头鱼摊',
    time: '05/13'
  },
  {
    name: '季谢新',
    position: '电子蝴蝶',
    time: '06/04'
  },
  {
    name: '雷军',
    position: '捣乱友商',
    time: '08/07'
  },
  {
    name: '任正非',
    position: '遥遥领先',
    time: '09/14'
  }
])
</script>

<template>
  <Card title="最新员工异动">
    <template #right>
      <div class="flex items-center text-[12px] text-[#202020aa] dark:text-gray-200 cursor-pointer">
        查看全部
        <Icon icon="ant-design:right-outlined" class="ml-1" />
      </div>
    </template>
    <a-radio-group v-model:value="currentType" option-type="button" :options="typeList" class="mb-4" />
    <div>
      <div v-for="(item, index) in peopleList" :key="index" class="flex justify-between mb-4 last:mb-0">
        <div class="flex items-center">
          <a-avatar :size="40" :src="`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`" class="mr-2" />
          <div>
            <div class="text-[14px]">{{ item.name }}</div>
            <div class="text-[12px] text-gray-500 dark:text-gray-200">{{ item.position }}</div>
          </div>
        </div>
        <div class="text-[12px] text-gray-500 dark:text-gray-200">{{ item.time }}入职</div>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss"></style>
