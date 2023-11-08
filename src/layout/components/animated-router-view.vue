<script lang="ts" setup>
import { useCommonStoreHook, useConfigStoreHook } from '@/store'
import { routeAnimateList } from '@/constants'

// 是否刷新路由
const refreshing = computed<boolean>(() => useCommonStoreHook().refreshing)
// 路由动画
const routeAnimateIn = computed<string>(
  () => routeAnimateList.filter((item) => item.value === useConfigStoreHook().config.theme.routeAnimate)[0]?.in || ''
)

const routeAnimateOut = computed<string>(
  () => routeAnimateList.filter((item) => item.value === useConfigStoreHook().config.theme.routeAnimate)[0]?.out || ''
)

const duration = computed<string>(
  () =>
    routeAnimateList.filter((item) => item.value === useConfigStoreHook().config.theme.routeAnimate)[0]?.duration ||
    '300ms'
)
</script>

<template>
  <main class="flex-1 relative">
    <router-view v-slot="{ Component, route }" class="h-full">
      <transition :name="routeAnimateIn && routeAnimateOut && 'route-animate'" appear mode="out-in">
        <keep-alive :include="useCommonStoreHook().keepAliveList">
          <component :is="Component" v-if="!refreshing" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>

<style lang="scss" scoped>
.route-animate-enter-active {
  animation: v-bind(routeAnimateIn) v-bind(duration);
}

.route-animate-leave-active {
  animation: v-bind(routeAnimateOut) v-bind(duration);
}
</style>
