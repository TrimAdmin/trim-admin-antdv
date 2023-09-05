<script lang="ts" setup>
import { echarts } from '@/plugins'

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
const colorList = ref<Array<string>>(['#186df5', '#47cade', '#9c8ef4', '#ffc368', '#ff6969', '#75b6ff', '#ff8a4a', '#32dbb7'])
const chart = ref()
const showDigit = ref<boolean>(true)
const totalCount = ref<number>(2640)

onMounted(() => {
  initChart()
  window.addEventListener('resize', () => {
    chart.value.resize()
  })
})

function initChart() {
  chart.value = echarts.init(weeklyPieChartRef.value)
  const option = {
    color: colorList.value,
    series: [
      {
        type: 'pie',
        data: dataList.value,
        clockWise: false,
        radius: ['60%', '90%'],
        label: {
          show: false
        }
      }
    ]
  }
  chart.value.setOption(option)
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
    initChart()
  })
}
</script>

<template>
  <a-card
    class="weekly-data"
    :head-style="{
      padding: 20
    }"
  >
    <div class="flex-bc mb-[16px]">
      <div class="text-[16px] font-bold">本周数据</div>
      <a-select v-model:value="type" @change="handleRandomData">
        <a-select-option v-for="item in typeList" :key="item.value" :value="item.value">{{ item.label }} </a-select-option>
      </a-select>
    </div>
    <div class="flex items-center text-[14px] text-[#202020aa] dark:text-gray-200">
      本周考勤
      <Icon icon="ant-design:right-outlined" class="ml-1" />
    </div>
    <div class="flex items-center mb-[16px]">
      <DigitScroll v-if="showDigit" :value="totalCount" class="text-[32px] font-bold mr-2 h-[48px]" />
      <div class="flex items-center">
        <span class="text-[#202020aa] dark:text-gray-200 mr-1">比较上周</span>
        <DigitScroll :value="312" prefix="+" class="text-[#186DF5]" />
      </div>
    </div>
    <div class="w-full h-[100px] flex items-center">
      <div ref="weeklyPieChartRef" class="w-[85px] h-[85px] mr-2" />
      <div class="flex-1 flex flex-wrap gap-y-2">
        <div v-for="(item, index) in dataList" :key="index" class="flex w-1/4">
          <div class="w-[4px] h-[4px] mt-[8px] mr-2 rounded" :style="{ backgroundColor: colorList[index] }"></div>
          <div>
            <div class="text-[12px] text-[#202020aa] dark:text-gray-200">{{ item.name }}</div>
            <DigitScroll v-if="showDigit" :value="item.value" class="text-[#202020] dark:text-gray-200 font-bold text-[16px] min-h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  </a-card>
</template>

<style scoped lang="scss">
.weekly-data {
  border-radius: 8px;
  overflow: hidden;
}
</style>
