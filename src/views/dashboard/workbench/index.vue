<script lang="ts" setup>
import WeeklyData from './components/weekly-data.vue'
import TodayTodo from './components/today-todo.vue'
import Info from './components/info.vue'
import HelpCenter from './components/help-center.vue'
import CommonApps from './components/common-apps.vue'
import EmployeeData from './components/employee-data.vue'
import EmploymentRating from './components/employment-rating.vue'
import Notice from './components/notice.vue'
import EmployeeChange from './components/employee-change.vue'
import LatestEmployeeChange from './components/latest-employee-change.vue'
</script>

<template>
  <div>
    <!-- 参考UI图：https://js.design/f/WwydKS?p=ynwGd8QEf8 -->
    <regular-layout class="content" no-background>
      <WeeklyData style="grid-area: 1/1/3/2" />
      <TodayTodo style="grid-area: 1/2/3/3" />
      <Info style="grid-area: 1/3/2/4" />
      <HelpCenter style="grid-area: 2/3/4/4" />
      <CommonApps style="grid-area: 3/1/4/3" />
      <EmployeeData style="grid-area: 4/1/5/2" />
      <EmploymentRating style="grid-area: 4/2/5/3" />
      <Notice style="grid-area: 4/3/5/4" />
      <EmployeeChange style="grid-area: 5/1/7/3" />
      <LatestEmployeeChange style="grid-area: 5/3/7/4" />
    </regular-layout>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr) 0.6fr;
  gap: 16px;
  width: 100%;
  height: 100%;
}
</style>
