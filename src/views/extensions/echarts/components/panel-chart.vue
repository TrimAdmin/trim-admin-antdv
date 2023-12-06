<script lang="ts" setup>
import { useECharts } from '@/hooks'

const panelRef = shallowRef<HTMLDivElement>()

onMounted(() => {
  useECharts(panelRef.value, {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: '压力表',
        type: 'gauge',
        progress: {
          show: true
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}'
        },
        data: [
          {
            value: 50,
            name: '当前压力'
          }
        ]
      }
    ]
  })
})
</script>

<template>
  <div ref="panelRef" class="h-full"></div>
</template>

<style scoped lang="scss"></style>
