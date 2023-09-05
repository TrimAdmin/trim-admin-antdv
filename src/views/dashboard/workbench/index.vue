<script lang="ts" setup>
import WeeklyData from './components/weekly-data.vue'
import TodayTodo from './components/today-todo.vue'
</script>

<template>
  <RegularLayout no-background class="content">
    <WeeklyData />
    <TodayTodo />
  </RegularLayout>
</template>

<style scoped lang="scss">
.content {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr) 0.6fr;
  gap: 16px;
}
</style>
