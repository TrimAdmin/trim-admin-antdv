<script lang="ts" setup>
import { useCommonStoreHook, useConfigStoreHook } from '@/store'
import { routeAnimateList } from '@/constants'

// 路由动画
const routeAnimateIn = computed<string>(
  () => routeAnimateList.filter((item) => item.value === useConfigStoreHook().config.theme.routeAnimate)[0]?.in || ''
)

const routeAnimateOut = computed<string>(
  () => routeAnimateList.filter((item) => item.value === useConfigStoreHook().config.theme.routeAnimate)[0]?.out || ''
)

const duration = computed<string>(
  () => routeAnimateList.filter((item) => item.value === useConfigStoreHook().config.theme.routeAnimate)[0]?.duration || '300ms'
)
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="routeAnimateIn && routeAnimateOut && 'route_animate'" mode="out-in" appear>
      <keep-alive :include="useCommonStoreHook().keepAliveList">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.route_animate-enter-active {
  animation: v-bind(routeAnimateIn) v-bind(duration);
}

.route_animate-leave-active {
  animation: v-bind(routeAnimateOut) v-bind(duration);
}
</style>
