<script lang="ts" setup>
import { echarts, ECOption } from '@/plugins'
import Card from './card.vue'

const waterChartRef = shallowRef<HTMLDivElement>()

onMounted(() => {
  const chart = echarts.init(waterChartRef.value)
  const options = {
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
          color: 'white',
          borderColor: 'rgba(255, 135, 8, 1)',
          borderWidth: 2
        },
        label: {
          color: 'black',
          fontSize: 20,
          formatter: ({ value }: { value: number }) => {
            return value * 100 + '分'
          }
        }
      }
    ]
  } as ECOption
  chart.setOption(options)
  window.addEventListener('resize', () => {
    chart.resize()
  })
})
</script>

<template>
  <Card title="用工评分">
    <template #right>
      <div class="flex items-center text-[12px] text-[#202020aa] dark:text-gray-200 cursor-pointer">
        查看详情
        <Icon icon="ant-design:right-outlined" class="ml-1" />
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

<style scoped lang="scss">
.indicator {
  background-color: #ff8708;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin-right: 8px;
}
</style>
