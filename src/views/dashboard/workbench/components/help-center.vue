<script lang="ts" setup>
const typeList = ref<Array<string>>(['常见问题', '人事管理', '合同材料'])
const currentType = ref<string>(typeList.value[0])
const helpList = ref<Array<string>>([
  '新员工入职流程帮助以及文档材料',
  '合同、档案等公司相关文档入口',
  '新建待办的使用和相关手册',
  '保密措施以及客户保密方案文档',
  '智能协同办公的操作手册'
])
</script>

<template>
  <Card title="帮助中心">
    <template #right>
      <div class="flex items-center text-[12px] text-[#202020aa] dark:text-gray-200 cursor-pointer">
        查看全部
        <Icon class="ml-1" icon="ant-design:right-outlined" />
      </div>
    </template>
    <a-radio-group
      v-model:value="currentType"
      :options="typeList"
      class="flex-c whitespace-nowrap overflow-hidden text-ellipsis mb-4"
      option-type="button"
    />
    <div
      v-for="(item, index) in helpList"
      :key="index"
      class="help-item w-full whitespace-nowrap overflow-hidden text-ellipsis bg-[#F8FAFE] dark:bg-[#111A2C] py-[12px] pl-[10px] mb-2 last:mb-0"
    >
      {{ item }}
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.help-item {
  border-left: 1px solid #186df5;
}
</style>
