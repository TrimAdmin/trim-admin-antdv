<script lang="ts" setup>
import { ECOption } from '@/plugins'
import { useECharts } from '@/hooks'

const rangeList = ref<Array<string>>(['全公司', '中心', '部门'])
const methodList = ref<Array<string>>(['按离职日期', '按部门'])
const range = ref<string>(rangeList.value[0])
const method = ref<string>(methodList.value[0])
const chartRef = shallowRef<HTMLDivElement>()
const xAxisData = ref<Array<string>>(['09/01', '09/02', '09/03', '09/04', '09/05', '09/06', '09/07', '09/08'])
const entryDataList = ref<Array<number>>([740, 326, 128, 659, 982, 1246, 246, 498])
const leaveDataList = ref<Array<number>>([214, 126, 28, 95, 182, 382, 246, 172])
const option: ECOption = {
  color: ['rgba(54, 218, 185, 1)', 'rgba(102, 153, 255, 1)'],
  grid: {
    left: 40,
    top: 30,
    width: '96%',
    height: '72%'
  },
  legend: {
    show: true,
    bottom: 0,
    icon: 'circle',
    itemWidth: 8,
    itemHeight: 8,
    textStyle: {
      color: 'rgba(108, 116, 130, 1)'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    data: xAxisData.value,
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
  series: [
    {
      name: '新增人员',
      type: 'line',
      data: entryDataList.value,
      symbol: 'none',
      smooth: true,
      lineStyle: {
        width: 3
      },
      areaStyle: {
        shadowColor: 'rgba(54, 218, 185, 1)',
        shadowBlur: 20,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(54, 218, 185, 0.5)'
            },
            {
              offset: 1,
              color: 'rgba(54, 218, 185, 0)'
            }
          ]
        }
      }
    },
    {
      name: '离职人员',
      type: 'line',
      data: leaveDataList.value,
      symbol: 'none',
      smooth: true,
      lineStyle: {
        width: 3
      },
      areaStyle: {
        shadowColor: 'rgba(102, 153, 255, 1)',
        shadowBlur: 20,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(102, 153, 255, 0.5)'
            },
            {
              offset: 1,
              color: 'rgba(102, 153, 255, 0)'
            }
          ]
        }
      }
    }
  ]
}

onMounted(() => {
  useECharts(chartRef.value, option)
})
</script>

<template>
  <Card title="员工异动">
    <template #right>
      <div class="flex items-center text-[12px] text-[#202020aa] dark:text-gray-200 cursor-pointer">
        刷新
        <Icon class="ml-1" icon="ant-design:sync-outlined" />
      </div>
    </template>
    <a-form class="mb-4" layout="inline">
      <a-form-item label="选择范围">
        <a-select v-model:value="range" class="min-w-[84px]">
          <a-select-option v-for="item in rangeList" :key="item" :value="item">{{ item }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="统计方式">
        <a-select v-model:value="method" class="min-w-[110px]">
          <a-select-option v-for="item in methodList" :key="item" :value="item">{{ item }}</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
    <div class="flex flex-bc w-2/3">
      <div>
        <div class="text-gray-500 dark:text-gray-200 mb-1">期初人数</div>
        <DigitScroll :value="639" class="text-[24px] font-bold" />
      </div>
      <a-divider class="h-[48px] mx-4" type="vertical" />
      <div>
        <div class="text-gray-500 dark:text-gray-200 mb-1">期末人数</div>
        <DigitScroll :value="320" class="text-[24px] font-bold" />
      </div>
      <a-divider class="h-[48px] mx-4" type="vertical" />
      <div>
        <div class="text-gray-500 dark:text-gray-200 mb-1">新增人数</div>
        <DigitScroll :value="178" class="text-[24px] font-bold" />
      </div>
      <a-divider class="h-[48px] mx-4" type="vertical" />
      <div>
        <div class="text-gray-500 dark:text-gray-200 mb-1">删除人数</div>
        <DigitScroll :value="245" class="text-[24px] font-bold" />
      </div>
    </div>
    <div ref="chartRef" class="h-[300px] w-full" />
  </Card>
</template>

<style lang="scss" scoped>
:deep(.ant-form-item .ant-form-item-label > label) {
  @apply text-gray-500;
  @apply dark:text-gray-200;
}
</style>
