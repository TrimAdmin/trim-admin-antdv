<script lang="ts" setup>
import { useECharts } from '@/hooks'

const pieRef = shallowRef<HTMLDivElement>()

onMounted(() => {
  useECharts(pieRef.value, {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '重定向' },
          { value: 580, name: '邮件' },
          { value: 484, name: '全局广告' },
          { value: 300, name: '视频广告' }
        ]
      }
    ]
  })
})
</script>

<template>
  <div ref="pieRef" class="h-full"></div>
</template>

<style scoped lang="scss"></style>
