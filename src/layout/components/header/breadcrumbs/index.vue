<script lang="ts" setup>
import { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'
import { useConfigStoreHook } from '@/store'

const router = useRouter()
const breadcrumbList = ref<Array<RouteRecordRaw>>([])
const currentRoute = ref<RouteLocationNormalizedLoaded>(router.currentRoute.value)
const { t } = useI18n()

watch(
  () => router.currentRoute.value,
  (newVal) => {
    currentRoute.value = newVal
    // console.log(newVal)
    breadcrumbList.value = newVal.matched
  },
  {
    deep: true,
    immediate: true
  }
)

function handleBreadcrumbChange(item: RouteRecordRaw) {
  if (item.name === currentRoute.value.name) return
  console.log(item)
  router.push({ name: item.name })
}
</script>

<template>
  <a-breadcrumb v-if="!useConfigStoreHook().config.theme.hideBreadcrumb">
    <a-breadcrumb-item v-if="currentRoute.name !== 'home'">
      <RouterLink to="/home">{{ t('menu.home') }}</RouterLink>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.name">
      <Component :is="breadcrumbList.length - 1 === index ? 'span' : 'a'" @click="handleBreadcrumbChange(item)">
        {{ item.meta?.i18n ? $t(item.meta?.i18n) : item.meta?.title }}
      </Component>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<style lang="scss" scoped></style>
