<script lang="ts" setup>
import { Dayjs } from 'dayjs'
import { echarts, ECOption } from '@/plugins'
import { useConfigStoreHook } from '@/store'
import { colorSchemeList } from '@/constants'

const activeKey = ref<number>(1)
const optionList = ref<Array<string>>(['今日', '本周', '本月', '本季度', '全年'])
const currentOption = ref<string>(optionList.value[0])
const timeRange = ref<[Dayjs, Dayjs]>()
const saleChartRef = shallowRef<HTMLDivElement>()
const saleChart = ref()
const saleChartOption = ref<ECOption>()
const xAxisList = ref<Array<string>>([])
const yAxisList = ref<Array<number>>([])
const primaryColor = computed<string>(
  () => colorSchemeList.filter((item) => item.scheme === useConfigStoreHook().config.theme.colorScheme)[0].primaryColor
)

function initChart() {
  xAxisList.value = []
  yAxisList.value = []
  for (let i = 1; i <= 12; i++) {
    xAxisList.value.push(i + '月')
    yAxisList.value.push(Math.floor(Math.random() * 10000))
  }
  if (saleChart.value) {
    saleChart.value.dispose()
  }
  saleChart.value = echarts.init(saleChartRef.value)
  saleChartOption.value = {
    color: [primaryColor.value],
    xAxis: {
      data: xAxisList.value,
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(237, 237, 237, 1)'
        }
      },
      axisLabel: {
        color: 'rgba(153, 153, 153, 1)'
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(237, 237, 237, 0.6)'
        }
      },
      axisLabel: {
        color: 'rgba(153, 153, 153, 1)'
      }
    },
    grid: {
      top: 20,
      left: 50,
      height: '80%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    series: [
      {
        type: 'bar',
        data: yAxisList.value
      }
    ]
  } as ECOption
  saleChart.value.setOption(saleChartOption.value)
}

function handleChange() {
  nextTick(() => {
    initChart()
  })
}

onMounted(() => {
  initChart()
  nextTick(() => {
    window.addEventListener('resize', () => {
      saleChart.value.resize()
    })
  })
})
</script>

<template>
  <a-card :bordered="false">
    <template #title>
      <a-tabs v-model:active-key="activeKey" animated @change="handleChange">
        <a-tab-pane :key="1" tab="销售额" />
        <a-tab-pane :key="2" tab="转化率" />
      </a-tabs>
    </template>
    <template #extra>
      <a-radio-group v-model:value="currentOption" class="mr-4" option-type="button" :options="optionList" />
      <a-range-picker v-model:value="timeRange" />
    </template>
    <div v-if="activeKey === 1" class="flex">
      <div class="w-2/3">
        <div>销售趋势</div>
        <div ref="saleChartRef" class="w-full h-[240px]" />
      </div>
      <div class="w-1/3">
        <div class="mb-2">销售额排名</div>
        <div>
          <div v-for="index of 6" :key="index" class="flex-bc py-2">
            <div class="flex">
              <div class="text-center mr-4 bg-blue-600 rounded-full w-6 h-6 text-white">{{ index }}</div>
              <div>迪荡{{ index }}号店</div>
            </div>
            <div class="flex-1 text-right font-bold">{{ ((11 - index) * 182.23).toFixed(2) }}万元</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex">
      <div class="w-2/3">
        <div>转化率</div>
        <div ref="saleChartRef" class="w-full h-[240px]" />
      </div>
      <div class="w-1/3">
        <div class="mb-2">转化率排名</div>
        <div>
          <div v-for="index of 6" :key="index" class="flex-bc py-2">
            <div class="flex">
              <div class="text-center mr-4 bg-blue-600 rounded-full w-6 h-6 text-white">{{ index }}</div>
              <div>城南{{ index }}号店</div>
            </div>
            <div class="flex-1 text-right font-bold">{{ ((11 - index) * 214.23).toFixed(2) }}万元</div>
          </div>
        </div>
      </div>
    </div>
  </a-card>
</template>

<style scoped lang="scss"></style>
