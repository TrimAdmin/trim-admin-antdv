<script lang="ts" setup>
import BarChart from './components/bar-chart.vue'
import LineChart from './components/line-chart.vue'
import PieChart from './components/pie-chart.vue'
import PanelChart from './components/panel-chart.vue'
</script>

<template>
  <div>
    <page-header title="ECharts图表" subtitle="框架已经封装了useECharts Hook，自动适配暗色模式" />
    <regular-layout>
      <a-card>
        <a-card-grid style="width: 50%; height: 300px">
          <BarChart />
        </a-card-grid>
        <a-card-grid style="width: 50%; height: 300px">
          <LineChart />
        </a-card-grid>
        <a-card-grid style="width: 50%; height: 300px">
          <PieChart />
        </a-card-grid>
        <a-card-grid style="width: 50%; height: 300px">
          <PanelChart />
        </a-card-grid>
      </a-card>
    </regular-layout>
  </div>
</template>

<style scoped lang="scss"></style>
