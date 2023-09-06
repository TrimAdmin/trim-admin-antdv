<script lang="ts" setup>
import Card from './card.vue'

const appList = ref<
  Array<{
    icon: string
    title: string
    href: string
  }>
>([
  {
    icon: 'ant-design:mail-filled',
    title: '邮件',
    href: 'https://mail.163.com/'
  },
  {
    icon: 'ant-design:snippets-filled',
    title: '问卷',
    href: 'https://www.wjx.top/'
  },
  {
    icon: 'ant-design:area-chart-outlined',
    title: '绩效',
    href: ''
  },
  {
    icon: 'ant-design:dingtalk-circle-filled',
    title: '人事',
    href: 'https://www.dingtalk.com/'
  },
  {
    icon: 'ant-design:pay-circle-filled',
    title: '工资条',
    href: ''
  },
  {
    icon: 'ant-design:clock-circle-filled',
    title: '审批',
    href: ''
  }
])
</script>

<template>
  <Card title="常用应用">
    <template #right>
      <div class="flex items-center text-[12px] text-[#202020aa] dark:text-gray-200 cursor-pointer">
        全部应用
        <Icon icon="ant-design:right-outlined" class="ml-1" />
      </div>
    </template>
    <div class="flex-ac">
      <div v-for="(item, index) in appList" :key="index" class="text-center">
        <a :href="item.href" target="_blank" class="bg-[#E7F0FD] dark:bg-[#111A2C] p-[14px] rounded-md flex-c mb-2 cursor-pointer">
          <Icon :icon="item.icon" class="text-[#186DF5] text-[22px]" />
        </a>
        <div class="text-gray-500 dark:text-gray-200">{{ item.title }}</div>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss"></style>
