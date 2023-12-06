<script lang="ts" setup>
import { useECharts } from '@/hooks'

const barRef = shallowRef<HTMLDivElement>()
const xAxisList = ref<Array<string>>([])
const yAxisList = ref<Array<number>>([])

onMounted(() => {
  xAxisList.value = []
  yAxisList.value = []
  for (let i = 1; i <= 12; i++) {
    xAxisList.value.push(i + '月')
    yAxisList.value.push(Math.floor(Math.random() * 10000))
  }
  useECharts(barRef.value, {
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
  })
})
</script>

<template>
  <div ref="barRef" class="h-full"></div>
</template>

<style scoped lang="scss"></style>
