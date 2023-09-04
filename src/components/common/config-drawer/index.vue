<script setup lang="ts">
import { useConfigStoreHook } from '@/store'
import { Icon } from '@iconify/vue'
import { colorSchemeList, routeAnimateList } from '@/trim-config.ts'
import { ITrimConfig } from '@/types/trim-config'

const open = ref<boolean>(false)
const darkTheme = computed<boolean>(() => useConfigStoreHook().darkTheme)
const hideTabs = computed<boolean>(() => useConfigStoreHook().config.theme.hideTabs)
const hideLogo = computed<boolean>(() => useConfigStoreHook().config.theme.hideLogo)
const colorScheme = computed<string>(() => useConfigStoreHook().config.theme.colorScheme)

function handleDrawerOpen() {
  open.value = true
}

// 更改暗黑模式
function handleDarkTheme() {
  useConfigStoreHook().setDarkTheme(!darkTheme.value)
}

// 更改隐藏标签页
function handleHideTabs() {
  useConfigStoreHook().setHideTabs(!hideTabs.value)
}

// 更改隐藏标签页
function handleHideLogo() {
  useConfigStoreHook().setHideLogo(!hideLogo.value)
}

// 更改配色方案
function handleColorScheme(colorScheme: string) {
  useConfigStoreHook().setColorScheme(colorScheme)
}

// 更改路由动画
function handleRouteAnimate(animate: (typeof routeAnimateList)[number]['value']) {
  useConfigStoreHook().setRouteAnimate(animate)
}
</script>

<template>
  <div class="h-full flex items-center hover:bg-gray-50 px-2 dark:hover:bg-slate-700">
    <a-tooltip>
      <template #title> 全局设置</template>
      <Icon :height="18" icon="ant-design:setting-outlined" class="cursor-pointer hover:text-blue-500" @click="handleDrawerOpen" />
    </a-tooltip>
  </div>
  <a-drawer v-model:open="open" title="全局设置" body-style="padding: 0 16px">
    <div class="text-center">
      <a-divider plain>颜色模式</a-divider>
      <a-switch :checked="darkTheme" checked-children="黑暗" un-checked-children="明亮" @change="handleDarkTheme"></a-switch>
    </div>
    <div class="text-center">
      <a-divider plain>页面布局</a-divider>
      <div class="flex justify-around items-center"></div>
    </div>
    <div class="text-center">
      <a-divider plain>配色方案</a-divider>
      <div class="flex gap-2 justify-center">
        <a-tooltip v-for="item in colorSchemeList" :key="item.scheme">
          <div
            :style="{ backgroundColor: item.primaryColor }"
            class="h-6 w-6 leading-7 rounded-sm border-gray-200 border-2 border-solid cursor-pointer"
            @click="handleColorScheme(item.scheme)"
          >
            <Icon v-if="colorScheme === item.scheme" icon="ant-design:check-outlined" class="text-white" :height="18" inline />
          </div>
          <template #title> {{ item.name }}</template>
        </a-tooltip>
      </div>
    </div>
    <div>
      <a-divider plain>页面显示</a-divider>
      <div class="flex justify-between items-center px-2 mb-4">
        <div class="dark:text-white">隐藏标签页</div>
        <a-switch :checked="hideTabs" checked-children="隐藏" un-checked-children="显示" @change="handleHideTabs"></a-switch>
      </div>
      <div class="flex justify-between items-center px-2 mb-4">
        <div class="dark:text-white">侧边栏logo</div>
        <a-switch :checked="hideLogo" checked-children="隐藏" un-checked-children="显示" @change="handleHideLogo"></a-switch>
      </div>
      <div class="flex justify-between items-center px-2 mb-4">
        <div class="dark:text-white">路由动画</div>
        <a-select :value="useConfigStoreHook().config.theme.routeAnimate" class="w-[120px]" @change="handleRouteAnimate">
          <a-select-option v-for="item in routeAnimateList" :key="item.value" :value="item.value">{{ item.label }}</a-select-option>
        </a-select>
      </div>
    </div>
  </a-drawer>
</template>

<style scoped lang="scss"></style>
