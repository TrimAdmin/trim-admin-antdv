<script lang="ts" setup>
import { useConfigStoreHook } from '@/store'
import { colorSchemeList, layoutList, routeAnimateList, tabStyleList } from '@/constants'
import { getCurrentThemeColor } from '@/hooks'

const open = ref<boolean>(false)
const router = useRouter()
const layout = computed<string>(() => useConfigStoreHook().config.theme.layout)
const colorScheme = computed<string>(() => useConfigStoreHook().config.theme.colorScheme)
const currentColor = computed<string>(() => getCurrentThemeColor())

function handleDrawerOpen() {
  open.value = true
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
      <Icon
        :height="18"
        class="cursor-pointer hover:text-blue-500"
        icon="ant-design:setting-outlined"
        @click="handleDrawerOpen"
      />
    </a-tooltip>
  </div>
  <a-drawer v-model:open="open" :body-style="{ padding: '0 16px' }" :title="$t('config.title')">
    <!-- 颜色模式 -->
    <div class="text-center">
      <a-divider plain>{{ $t('config.darkMode') }}</a-divider>
      <a-switch
        v-model:checked="useConfigStoreHook().darkTheme"
        :checked-children="$t('constant.dark')"
        :un-checked-children="$t('constant.light')"
      ></a-switch>
    </div>
    <!-- 菜单颜色模式 -->
    <div class="text-center">
      <a-divider plain>{{ $t('config.menuDarkMode') }}</a-divider>
      <a-switch
        v-model:checked="useConfigStoreHook().config.theme.menuDarkMode"
        :checked-children="$t('constant.dark')"
        :un-checked-children="$t('constant.light')"
      ></a-switch>
    </div>
    <!-- 页面布局 -->
    <div class="text-center">
      <a-divider plain>{{ $t('config.layout') }}</a-divider>
      <div class="flex justify-around items-center" :style="{ '--theme-color': currentColor }">
        <a-tooltip v-for="item in layoutList" :key="item.value">
          <div
            :style="layout === item.value ? { borderColor: currentColor } : { border: 'none' }"
            :class="`layout-${item.value} border-2 border-solid shadow-md dark:shadow-gray-600 w-16 h-12 rounded-2 transition hover:(cursor-pointer shadow-gray-400 dark:shadow-gray-500)`"
            @click="handleLayout(item.value)"
          >
            <div class="header" />
            <div class="content" />
            <div class="sider" />
          </div>
          <template #title> {{ item.label }}</template>
        </a-tooltip>
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
            <Icon
              v-if="colorScheme === item.scheme"
              :height="18"
              class="text-white"
              icon="ant-design:check-outlined"
              inline
            />
          </div>
          <template #title> {{ item.name }}</template>
        </a-tooltip>
      </div>
    </div>
    <!-- 页面显示 -->
    <div>
      <a-divider plain>{{ $t('config.view') }}</a-divider>
      <!-- 标签页样式 -->
      <div class="flex justify-between items-center px-2 mb-4">
        <div class="dark:text-white">{{ $t('config.tabStyle') }}</div>
        <a-segmented v-model:value="useConfigStoreHook().config.theme.tabStyle" :options="tabStyleList" />
      </div>
      <!-- 侧边栏Logo -->
      <div class="flex justify-between items-center px-2 mb-4">
        <div class="dark:text-white">{{ $t('config.siderLogo') }}</div>
        <a-switch
          v-model:checked="useConfigStoreHook().config.theme.hideLogo"
          :checked-children="$t('constant.hide')"
          :un-checked-children="$t('constant.show')"
        ></a-switch>
      </div>
      <!-- 隐藏面包屑 -->
      <div class="flex justify-between items-center px-2 mb-4">
        <div class="dark:text-white">{{ $t('config.hideBreadcrumb') }}</div>
        <a-switch
          v-model:checked="useConfigStoreHook().config.theme.hideBreadcrumb"
          :checked-children="$t('constant.hide')"
          :un-checked-children="$t('constant.show')"
        ></a-switch>
      </div>
      <!-- 路由动画 -->
      <div class="flex justify-between items-center px-2 mb-4">
        <div class="dark:text-white">{{ $t('config.routerAnimate') }}</div>
        <a-select
          :value="useConfigStoreHook().config.theme.routeAnimate"
          class="w-[140px]"
          @change="(value) => handleRouteAnimate(value as string)"
        >
          <a-select-option v-for="item in routeAnimateList" :key="item.value" :value="item.value"
            >{{ item.label }}
          </a-select-option>
        </a-select>
      </div>
    </div>
  </a-drawer>
</template>

<style lang="scss" scoped>
.layout-normal,
.layout-top,
.layout-mix {
  position: relative;
  display: grid;
  gap: 4px;
  padding: 8px;

  .header {
    grid-area: header;
    background-color: var(--theme-color);
    border-radius: 2px;
    opacity: 0.6;
  }

  .sider {
    grid-area: sider;
    background-color: var(--theme-color);
    border-radius: 2px;
  }

  .content {
    grid-area: content;
    background-color: var(--theme-color);
    border-radius: 2px;
    opacity: 0.3;
  }
}

.layout-normal {
  grid-template-areas:
    'sider header header'
    'sider content content'
    'sider content content';
}

.layout-mix {
  grid-template-areas:
    'header header header'
    'sider content content'
    'sider content content';
}

.layout-top {
  grid-template-areas:
    'header header header'
    'content content contet';

  .sider {
    display: none;
  }
}
</style>
