<script lang="ts" setup>
const noticeList = ref<
  Array<{
    time: string
    title: string
  }>
>([
  {
    time: '9-24',
    title: '关于中秋节福利领取的通知'
  },
  {
    time: '6-12',
    title: '关于开展对知识库以及文档的整理须知'
  },
  {
    time: '5-20',
    title: '关于公司禁止虐狗须知'
  }
])
</script>

<template>
  <Card title="公告">
    <template #right>
      <div class="flex items-center text-[12px] text-[#202020aa] dark:text-gray-200 cursor-pointer">
        查看全部
        <Icon class="ml-1" icon="ant-design:right-outlined" />
      </div>
    </template>
    <div>
      <div
        v-for="(item, index) in noticeList"
        :key="index"
        class="my-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[99%]"
      >
        <span class="font-bold mr-2">{{ item.time }}</span>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </Card>
</template>

<style lang="scss" scoped></style>
