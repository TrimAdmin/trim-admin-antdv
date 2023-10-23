<script lang="ts" setup>
const todos = ref<
  Array<{
    time: string
    title: string
    color?: string
    subtitle?: string
  }>
>([
  {
    time: '9:00',
    title: '新人入职培训',
    subtitle: '注意事项：请提醒新员工带好相关资料和入职证明',
    color: 'gray'
  },
  {
    time: '11:00',
    title: '人事内部会议',
    subtitle: '针对人员管理变化的内部会议',
    color: 'red'
  },
  {
    time: '14:00',
    title: '处理审批报销流程审批',
    subtitle: '分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容'
  },
  {
    time: '16:30',
    title: '下午茶时间到！',
    subtitle: '打把刀塔还是来杯罪恶的奶茶？',
    color: 'green'
  }
])
</script>

<template>
  <a-card
    :head-style="{
      padding: 20
    }"
  >
    <div class="flex-bc mb-[16px]">
      <div class="text-[16px] font-bold">今日待办</div>
      <div class="flex items-center text-[12px] text-[#202020aa] dark:text-gray-200 cursor-pointer">
        全部待办
        <Icon class="ml-1" icon="ant-design:right-outlined" />
      </div>
    </div>
    <a-timeline>
      <a-timeline-item v-for="(item, index) in todos" :key="index" :color="item.color">
        <div class="text-[#186DF5] font-bold text-[12px]">{{ item.time }}</div>
        <div class="text-[14px]">{{ item.title }}</div>
        <div class="text-gray-500 dark:text-gray-200 text-[12px]">{{ item.subtitle }}</div>
      </a-timeline-item>
    </a-timeline>
  </a-card>
</template>

<style lang="scss" scoped></style>
