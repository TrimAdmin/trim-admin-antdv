<script setup lang="ts">
import { useConfigStoreHook } from '@/store'
import { colorSchemeList, layoutList, routeAnimateList } from '@/constants'
import { getCurrentThemeColor } from '@/hooks'

const open = ref<boolean>(false)
const darkTheme = computed<boolean>(() => useConfigStoreHook().darkTheme)
const layout = computed<string>(() => useConfigStoreHook().config.theme.layout)
const hideTabs = computed<boolean>(() => useConfigStoreHook().config.theme.hideTabs)
const hideLogo = computed<boolean>(() => useConfigStoreHook().config.theme.hideLogo)
const hideBreadcrumb = computed<boolean>(() => useConfigStoreHook().config.theme.hideBreadcrumb)
const colorScheme = computed<string>(() => useConfigStoreHook().config.theme.colorScheme)
const siderDarkMode = computed<boolean>(() => useConfigStoreHook().config.theme.siderDarkMode)
const currentColor = computed<string>(() => getCurrentThemeColor())

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

// 更改隐藏logo
function handleHideLogo() {
  useConfigStoreHook().setHideLogo(!hideLogo.value)
}

// 更改隐藏面包屑
function handleHideBreadcrumb() {
  useConfigStoreHook().setHideBreadcrumb(!hideBreadcrumb.value)
}

// 更改侧边栏暗色模式
function handleSiderDarkMode() {
  useConfigStoreHook().setSiderDarkMode(!siderDarkMode.value)
}

// 更改配色方案
function handleColorScheme(colorScheme: string) {
  useConfigStoreHook().setColorScheme(colorScheme)
}

// 更改路由动画
function handleRouteAnimate(animate: (typeof routeAnimateList)[number]['value']) {
  useConfigStoreHook().setRouteAnimate(animate)
}

// 更改页面布局
function handleLayout(layout: (typeof layoutList)[number]['value']) {
  useConfigStoreHook().setLayout(layout)
}
</script>

<template>
  <div class="h-full flex items-center hover:bg-gray-50 px-2 dark:hover:bg-slate-700">
    <a-tooltip>
      <template #title>{{ $t('config.title') }}</template>
      <Icon :height="18" icon="ant-design:setting-outlined" class="cursor-pointer hover:text-blue-500" @click="handleDrawerOpen" />
    </a-tooltip>
  </div>
  <a-drawer v-model:open="open" :title="$t('config.title')" :body-style="{ padding: '0 16px' }">
    <!-- 颜色模式 -->
    <div class="text-center">
      <a-divider plain>{{ $t('config.darkMode') }}</a-divider>
      <a-switch
        :checked="darkTheme"
        :checked-children="$t('constant.dark')"
        :un-checked-children="$t('constant.light')"
        @change="handleDarkTheme"
      ></a-switch>
    </div>
    <!-- 侧边栏颜色模式 -->
    <div class="text-center">
      <a-divider plain>{{ $t('config.siderDarkMode') }}</a-divider>
      <a-switch
        :checked="siderDarkMode"
        :checked-children="$t('constant.dark')"
        :un-checked-children="$t('constant.light')"
        @change="handleSiderDarkMode"
      ></a-switch>
    </div>
    <!-- 页面布局 -->
    <div class="text-center">
      <a-divider plain>{{ $t('config.layout') }}</a-divider>
      <div class="flex justify-around items-center">
        <div
          v-for="item in layoutList"
          :key="item.value"
          :style="layout === item.value ? { borderColor: currentColor } : { border: 'none' }"
          class="border-2 border-solid shadow-md w-16 h-12 rounded-2 transition hover:(cursor-pointer shadow-gray-400)"
          @click="handleLayout(item.value)"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
    <!-- 配色方案 -->
    <div class="text-center">
      <a-divider plain>{{ $t('config.colorScheme') }}</a-divider>
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
    <!-- 页面显示 -->
    <div>
      <a-divider plain>{{ $t('config.view') }}</a-divider>
      <!-- 隐藏标签页 -->
      <div class="flex justify-between items-center px-2 mb-4">
        <div class="dark:text-white">{{ $t('config.hideTabs') }}</div>
        <a-switch
          :checked="hideTabs"
          :checked-children="$t('constant.hide')"
          :un-checked-children="$t('constant.show')"
          @change="handleHideTabs"
        ></a-switch>
      </div>
      <!-- 侧边栏Logo -->
      <div class="flex justify-between items-center px-2 mb-4">
        <div class="dark:text-white">{{ $t('config.siderLogo') }}</div>
        <a-switch
          :checked="hideLogo"
          :checked-children="$t('constant.hide')"
          :un-checked-children="$t('constant.show')"
          @change="handleHideLogo"
        ></a-switch>
      </div>
      <!-- 隐藏面包屑 -->
      <div class="flex justify-between items-center px-2 mb-4">
        <div class="dark:text-white">{{ $t('config.hideBreadcrumb') }}</div>
        <a-switch
          :checked="hideBreadcrumb"
          :checked-children="$t('constant.hide')"
          :un-checked-children="$t('constant.show')"
          @change="handleHideBreadcrumb"
        ></a-switch>
      </div>
      <!-- 路由动画 -->
      <div class="flex justify-between items-center px-2 mb-4">
        <div class="dark:text-white">{{ $t('config.routerAnimate') }}</div>
        <a-select :value="useConfigStoreHook().config.theme.routeAnimate" class="w-[120px]" @change="(value) => handleRouteAnimate(value as string)">
          <a-select-option v-for="item in routeAnimateList" :key="item.value" :value="item.value">{{ item.label }} </a-select-option>
        </a-select>
      </div>
    </div>
  </a-drawer>
</template>

<style scoped lang="scss"></style>
