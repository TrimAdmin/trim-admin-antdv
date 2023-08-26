<script setup lang="ts">
import { useConfigStoreHook } from '@/store'
import { Icon } from '@iconify/vue'
import { colorSchemeList } from '@/trim-config'

const open = ref<boolean>(false)
const darkTheme = computed<boolean>(() => useConfigStoreHook().darkTheme)
const hideTabs = computed<boolean>(() => useConfigStoreHook().hideTabs)
const hideLogo = computed<boolean>(() => useConfigStoreHook().hideLogo)
const colorScheme = computed<string>(() => useConfigStoreHook().colorScheme)

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
</script>

<template>
  <div class="h-full flex items-center hover:bg-gray-50 px-2 dark:hover:bg-slate-700">
    <a-tooltip>
      <template #title> 全局设置 </template>
      <Icon :height="18" icon="ant-design:setting-outlined" class="cursor-pointer hover:text-blue-500" @click="handleDrawerOpen" />
    </a-tooltip>
  </div>
  <a-drawer v-model:open="open" title="全局设置" bodyStyle="padding: 0 16px">
    <div class="text-center">
      <a-divider plain>颜色模式</a-divider>
      <a-switch :checked="darkTheme" @change="handleDarkTheme" checkedChildren="黑暗" unCheckedChildren="明亮"></a-switch>
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
            <Icon icon="ant-design:check-outlined" v-if="colorScheme === item.scheme" class="text-white" :height="18" inline />
          </div>
          <template #title> {{ item.name }} </template>
        </a-tooltip>
      </div>
    </div>
    <div>
      <a-divider plain>页面显示</a-divider>
      <div class="flex justify-between items-center px-2 mb-4">
        <div>隐藏标签页</div>
        <a-switch :checked="hideTabs" @change="handleHideTabs" checkedChildren="隐藏" unCheckedChildren="显示"></a-switch>
      </div>
      <div class="flex justify-between items-center px-2 mb-4">
        <div>侧边栏logo</div>
        <a-switch :checked="hideLogo" @change="handleHideLogo" checkedChildren="隐藏" unCheckedChildren="显示"></a-switch>
      </div>
    </div>
  </a-drawer>
</template>

<style scoped lang="scss"></style>
