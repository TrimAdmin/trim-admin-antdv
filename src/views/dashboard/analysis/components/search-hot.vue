<script lang="ts" setup>
import { ECOption } from '@/plugins'
import { colorSchemeList } from '@/constants'
import { useConfigStoreHook } from '@/store'
import { useECharts } from '@/hooks'

const userChartRef = shallowRef<HTMLDivElement>()
const aveChartRef = shallowRef<HTMLDivElement>()
const primaryColor = computed<string>(
  () => colorSchemeList.filter((item) => item.scheme === useConfigStoreHook().config.theme.colorScheme)[0].primaryColor
)
const option1 = {
  color: primaryColor.value,
  grid: {
    bottom: 50,
    left: 0,
    width: '100%'
  },
  xAxis: {
    type: 'category',
    value: [1, 2, 3, 4, 5],
    show: false
  },
  yAxis: {
    show: false
  },
  series: [
    {
      symbol: 'none',
      type: 'line',
      data: [50, 30, 70, 40, 20],
      smooth: true,
      areaStyle: {}
    }
  ]
} as ECOption

const option2 = {
  color: primaryColor.value,
  grid: {
    bottom: 50,
    left: 0,
    width: '100%'
  },
  xAxis: {
    type: 'category',
    value: [1, 2, 3, 4, 5],
    show: false
  },
  yAxis: {
    show: false
  },
  series: [
    {
      symbol: 'none',
      type: 'line',
      data: [30, 60, 50, 80, 20],
      smooth: true,
      areaStyle: {}
    }
  ]
} as ECOption

watch(
  () => useConfigStoreHook().darkTheme,
  () => {
    useECharts(userChartRef.value, option1)
    useECharts(aveChartRef.value, option2)
  }
)

onMounted(() => {
  useECharts(userChartRef.value, option1)
  useECharts(aveChartRef.value, option2)
  mockDataSource()
})

const dataSourceList = ref<
  Array<{
    name: string
    ip: string
    address: string
  }>
>([])

const nameList = [
  'Picasso',
  'Klimt',
  'Degas',
  'Caravaggio',
  'Kahlo',
  'Munch',
  'Renoir',
  'Kandinsky',
  'Joan Miro',
  'Rothko'
]

function mockDataSource() {
  for (let i = 0; i < 50; i++) {
    dataSourceList.value.push({
      name: nameList[i % 4],
      ip: `${Math.round(Math.random() * 100) + 1}.${Math.round(Math.random() * 100) + 1}.${
        Math.round(Math.random() * 100) + 1
      }.${Math.round(Math.random() * 100) + 1}`,
      address: `翻斗花园${i + 1}幢`
    })
  }
}

const columnList = [
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'ip',
    dataIndex: 'ip',
    key: 'ip'
  },
  {
    title: '地区',
    dataIndex: 'address',
    key: 'address'
  }
]
</script>

<template>
  <a-card :bordered="false">
    <div class="text-[16px] mb-4">热门搜索</div>
    <div class="flex-bc gap-4 mb-4">
      <div class="flex-1">
        <div>搜索用户数</div>
        <div class="text-[24px] font-bold">12580</div>
        <div ref="userChartRef" class="w-full h-16" />
      </div>
      <div class="flex-1">
        <div>搜索次数</div>
        <div class="text-[24px] font-bold">12138</div>
        <div ref="aveChartRef" class="w-full h-16" />
      </div>
    </div>
    <a-table :columns="columnList" :data-source="dataSourceList" :pagination="{ pageSize: 5 }" size="small" />
  </a-card>
</template>

<style lang="scss" scoped></style>
