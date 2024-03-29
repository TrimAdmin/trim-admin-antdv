<script lang="ts" setup>
import { ECOption } from '@/plugins'
import { useECharts } from '@/hooks'

const typeList = ref<Array<{ label: string; value: string }>>([
  {
    label: '按周',
    value: 'week'
  },
  {
    label: '按月',
    value: 'month'
  },
  {
    label: '按年',
    value: 'year'
  }
])
const type = ref<string>(typeList.value[0].value)
const dataList = ref<Array<{ name: string; value: number }>>([
  {
    name: '正常',
    value: 869
  },
  {
    name: '迟到',
    value: 280
  },
  {
    name: '早退',
    value: 56
  },
  {
    name: '请假',
    value: 32
  },
  {
    name: '缺卡',
    value: 87
  },
  {
    name: '旷工',
    value: 28
  },
  {
    name: '异地打卡',
    value: 134
  },
  {
    name: '异常',
    value: 43
  }
])
const weeklyPieChartRef = shallowRef<HTMLDivElement>()
const colorList = ref<Array<string>>([
  '#186df5',
  '#47cade',
  '#9c8ef4',
  '#ffc368',
  '#ff6969',
  '#75b6ff',
  '#ff8a4a',
  '#32dbb7'
])
const chart = ref()
const showDigit = ref<boolean>(true)
const totalCount = ref<number>(2640)

onMounted(() => {
  useECharts(weeklyPieChartRef.value, option)
  window.addEventListener('resize', () => {
    chart.value.resize()
  })
})

const option: ECOption = {
  color: colorList.value,
  series: [
    {
      type: 'pie',
      data: dataList.value,
      clockwise: false,
      radius: ['60%', '90%'],
      label: {
        show: false
      }
    }
  ]
}

function handleRandomData() {
  showDigit.value = false
  const list: Array<{ name: string; value: number }> = []
  dataList.value.map((item: { name: string; value: number }) => {
    list.push({
      name: item.name,
      value: Math.floor(Math.random() * 1000)
    })
  })
  dataList.value = list
  totalCount.value = list.reduce((prev, curr) => prev + curr.value, 0)
  nextTick(() => {
    showDigit.value = true
    useECharts(weeklyPieChartRef.value, option)
  })
}
</script>

<template>
  <a-card
    :head-style="{
      padding: 20
    }"
  >
    <div class="flex-bc mb-[16px]">
      <div class="text-[16px] font-bold">本周数据</div>
      <a-select v-model:value="type" @change="handleRandomData">
        <a-select-option v-for="item in typeList" :key="item.value" :value="item.value"
          >{{ item.label }}
        </a-select-option>
      </a-select>
    </div>
    <div class="flex items-center text-[14px] text-gray-500 dark:text-gray-200">
      本周考勤
      <Icon class="ml-1" icon="ant-design:right-outlined" />
    </div>
    <div class="flex items-center mb-[16px]">
      <DigitScroll v-if="showDigit" :value="totalCount" class="text-[32px] font-bold mr-2 h-[48px]" />
      <div class="flex items-center">
        <span class="text-gray-500 dark:text-gray-200 mr-1">比较上周</span>
        <span class="text-[#186DF5]">+312</span>
      </div>
    </div>
    <div class="w-full h-[100px] flex-ac items-center mb-4">
      <div ref="weeklyPieChartRef" class="h-[85px] w-[85px]" />
      <div class="flex flex-wrap gap-y-2">
        <div v-for="(item, index) in dataList" :key="index" class="flex w-1/4">
          <div :style="{ backgroundColor: colorList[index] }" class="w-[4px] h-[4px] mt-[8px] mr-2 rounded"></div>
          <div>
            <div class="text-[12px] text-gray-500 dark:text-gray-200">{{ item.name }}</div>
            <div class="text-[#202020] dark:text-gray-200 font-bold text-[16px] min-h-[20px]">
              {{ item.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="weekly-info pt-4 flex">
      <div class="w-1/3">
        <div class="flex items-center text-[14px] text-gray-500 dark:text-gray-200">
          本周审批
          <Icon class="ml-1" icon="ant-design:right-outlined" />
        </div>
        <div class="font-bold text-[22px] my-2">23</div>
        <div class="text-gray-500 dark:text-gray-200">
          已通过<span class="text-green-500 mx-1">2</span> 驳回<span class="text-red-500 mx-1">2</span>
        </div>
      </div>
      <div class="w-1/3">
        <div class="flex items-center text-[14px] text-gray-500 dark:text-gray-200">
          本周报销
          <Icon class="ml-1" icon="ant-design:right-outlined" />
        </div>
        <div class="font-bold text-[22px] my-2">14</div>
        <div class="text-gray-500 dark:text-gray-200">
          已报销<span class="text-green-500 mx-1">2</span> 未报销<span class="text-blue-500 mx-1">2</span>
        </div>
      </div>
      <div class="w-1/3">
        <div class="flex items-center text-[14px] text-gray-500 dark:text-gray-200">
          本周人事
          <Icon class="ml-1" icon="ant-design:right-outlined" />
        </div>
        <div class="font-bold text-[22px] my-2">17</div>
        <div class="text-gray-500 dark:text-gray-200">
          入职<span class="text-blue-500 mx-1">+4</span> 转正<span class="text-blue-500 mx-1">+6</span>
        </div>
      </div>
    </div>
  </a-card>
</template>

<style lang="scss" scoped>
.weekly-info {
  border-top: 1px solid rgb(100 100 100 / 10%);
}
</style>
