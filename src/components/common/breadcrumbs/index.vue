<script lang="ts" setup>
import { getParentRoutes } from '@/router/utils.ts'
import { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'

const router = useRouter()
const breadcrumbList = ref<Array<RouteRecordRaw>>([])
const currentRoute = ref<RouteLocationNormalizedLoaded>()

watch(
  () => router.currentRoute.value,
  (newVal) => {
    currentRoute.value = newVal
    breadcrumbList.value = getParentRoutes(newVal.name as string)
  },
  {
    deep: true,
    immediate: true
  }
)

function handleBreadcrumbChange(item: RouteRecordRaw) {
  router.push({ name: item.name })
}
</script>

<template>
  <Motion>
    <a-breadcrumb>
      <a-breadcrumb-item v-if="breadcrumbList.length !== 0">
        <RouterLink to="/home">首页</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item v-for="item in breadcrumbList" :key="item.name">
        <a @click="handleBreadcrumbChange(item)">{{ item.meta?.title }}</a>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        {{ currentRoute?.meta.title! }}
      </a-breadcrumb-item>
    </a-breadcrumb>
  </Motion>
</template>

<style scoped lang="scss"></style>
