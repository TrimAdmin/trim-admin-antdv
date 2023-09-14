<script lang="ts" setup>
import { ECOption } from '@/plugins'
import { useECharts } from '@/hooks'
import { useConfigStoreHook } from '@/store'

const activeRadio = ref<string>('1')
const categoryChartRef = shallowRef<HTMLDivElement>()
const option = {
  tooltip: {},
  legend: {
    orient: 'vertical',
    right: 0,
    top: '30%'
  },
  series: [
    {
      type: 'pie',
      roseType: true,
      data: [
        {
          name: '百度',
          value: 864
        },
        {
          name: '谷歌',
          value: 632
        },
        {
          name: '搜狗',
          value: 80
        },
        {
          name: '其他',
          value: 210
        }
      ]
    }
  ]
} as ECOption

watch(
  () => useConfigStoreHook().darkTheme,
  () => {
    useECharts(categoryChartRef.value, option)
  }
)

onMounted(() => {
  useECharts(categoryChartRef.value, option)
})
</script>

<template>
  <a-card>
    <div class="flex-bc mb-4">
      <div>搜索来源占比</div>
      <div>
        <a-radio-group v-model:value="activeRadio" option-type="button">
          <a-radio value="1">百度</a-radio>
          <a-radio value="2">谷歌</a-radio>
          <a-radio value="3">搜狗</a-radio>
        </a-radio-group>
      </div>
    </div>
    <div ref="categoryChartRef" class="h-[420px] w-full" />
  </a-card>
</template>

<style scoped lang="scss"></style>
