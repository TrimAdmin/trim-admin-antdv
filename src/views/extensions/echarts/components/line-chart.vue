<script lang="ts" setup>
import { ECOption } from '@/plugins'
import { useECharts } from '@/hooks'

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
  <div ref="chartRef" class="h-full" />
</template>

<style lang="scss" scoped>
:deep(.ant-form-item .ant-form-item-label > label) {
  @apply text-gray-500;
  @apply dark:text-gray-200;
}
</style>
