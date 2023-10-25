<script lang="ts" setup>
import { getParentRoutes } from '@/router/utils.ts'
import { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'
import { useConfigStoreHook } from '@/store'

const router = useRouter()
const breadcrumbList = ref<Array<RouteRecordRaw>>([])
const currentRoute = ref<RouteLocationNormalizedLoaded>()
const { t } = useI18n()

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
  <a-breadcrumb v-if="!useConfigStoreHook().config.theme.hideBreadcrumb">
    <a-breadcrumb-item v-if="breadcrumbList.length !== 0">
      <RouterLink to="/home">{{ t('menu.home') }}</RouterLink>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="item in breadcrumbList" :key="item.name">
      <a @click="handleBreadcrumbChange(item)">{{ item.meta?.title }}</a>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      {{ currentRoute?.meta.title! }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<style lang="scss" scoped></style>
