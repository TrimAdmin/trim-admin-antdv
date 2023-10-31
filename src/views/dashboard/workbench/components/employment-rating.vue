<script lang="ts" setup>
import { ECOption } from '@/plugins'
import { useECharts } from '@/hooks'

const waterChartRef = shallowRef<HTMLDivElement>()
const options: ECOption = {
  series: [
    {
      type: 'liquidFill',
      radius: '90%',
      shape: 'circle',
      color: ['rgba(255, 135, 8, 1)', 'rgba(255, 135, 8, 0.4)'],
      data: [0.4, 0.45],
      outline: {
        show: false
      },
      backgroundStyle: {
        color: 'transparent',
        borderColor: 'rgba(255, 135, 8, 1)',
        borderWidth: 2
      },
      label: {
        fontSize: 20,
        formatter: ({ value }) => {
          return +value * 100 + '分'
        }
      }
    }
  ]
}

onMounted(() => {
  useECharts(waterChartRef.value, options)
})
</script>

<template>
  <Card title="用工评分">
    <template #right>
      <div class="flex items-center text-[12px] text-[#202020aa] dark:text-gray-200 cursor-pointer">
        查看详情
        <Icon class="ml-1" icon="ant-design:right-outlined" />
      </div>
    </template>
    <div class="flex-bc">
      <div ref="waterChartRef" class="w-[80px] h-[80px] mr-8" />
      <div class="flex-1">
        <div class="text-gray-500 dark:text-gray-200 flex items-center">
          <div class="indicator" />
          现合同到期日缺失员工 <span class="ml-2 text-[#FF8708]">13名</span>
        </div>
        <div class="text-gray-500 dark:text-gray-200 flex items-center">
          <div class="indicator" />
          紧急联系人电话缺失员工 <span class="ml-2 text-[#FF8708]">23名</span>
        </div>
        <div class="text-gray-500 dark:text-gray-200 flex items-center">
          <div class="indicator" />
          最近7天旷工≥1天员工 <span class="ml-2 text-[#FF8708]">7名</span>
        </div>
      </div>
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.indicator {
  width: 4px;
  height: 4px;
  margin-right: 8px;
  background-color: #ff8708;
  border-radius: 50%;
}
</style>
