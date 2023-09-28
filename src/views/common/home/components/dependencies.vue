<script lang="ts" setup>
import packageJson from '../../../../../package.json'

const depList = Object.entries(packageJson.dependencies)
const devDepList = Object.entries(packageJson.devDependencies)
</script>

<template>
  <a-card>
    <div class="text-[18px] mb-4">依赖列表</div>
    <div class="flex gap-4 flex-wrap">
      <a-list size="small">
        <a-list-item v-for="item in depList" :key="item[0]"> {{ item[0] }}: {{ item[1] }}</a-list-item>
      </a-list>
      <a-list v-for="index of Math.floor(devDepList.length / depList.length)" :key="index" size="small">
        <a-list-item v-for="item in devDepList.slice(index * depList.length - 1, index * depList.length - 1 + depList.length)" :key="item[0]">
          {{ item[0] }}: {{ item[1] }}
        </a-list-item>
      </a-list>
    </div>
  </a-card>
</template>

<style scoped lang="scss"></style>
