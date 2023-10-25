<script lang="ts" setup>
import { headerHeight, useIcon } from '@/hooks'
import { RouteRecordName } from 'vue-router'
import { useCommonStoreHook, useConfigStoreHook, useUserStoreHook } from '@/store'
import { ItemType, Modal } from 'ant-design-vue'
import { Key } from 'ant-design-vue/es/_util/type'
import Refresh from '@/layout/components/header/refresh/index.vue'
import FullScreen from '@/layout/components/header/full-screen/index.vue'
import ToggleTheme from '@/layout/components/header/toggle-theme/index.vue'
import GlobalSearch from '@/layout/components/header/global-search/index.vue'

const router = useRouter()

// 侧边栏logo
const hideLogo = computed<boolean>(() => useConfigStoreHook().config.theme.hideLogo)
// 系统标题
const title = computed<string>(() => import.meta.env.VITE_DOCUMENT_NAME)
const layout = computed<string>(() => useConfigStoreHook().config.theme.layout)
// 菜单项
const menus = computed<Array<ItemType>>(() =>
  layout.value === 'top'
    ? useUserStoreHook().menuList
    : useUserStoreHook().menuList.map((item) => ({ ...item, children: undefined }) as ItemType)
)
// 默认选中的菜单
const defaultSelect = computed<Array<Key>>(() =>
  layout.value === 'top'
    ? ([useCommonStoreHook().currentRouteName] as Array<Key>)
    : (useCommonStoreHook().currentOpenMenu as Array<Key>)
)
// 侧边栏暗色模式
const menuDarkMode = computed<boolean>(() => useConfigStoreHook().config.theme.menuDarkMode)
const username = computed<string>(() => useUserStoreHook().userInfo.username)
const avatar = computed<string>(() => useUserStoreHook().userInfo.avatar || '')

const dropdownMenuItems = reactive<Array<ItemType>>([
  {
    label: '首页',
    title: '首页',
    key: 'home',
    icon: useIcon('ant-design:home-outlined')
  },
  {
    label: '个人中心',
    title: '个人中心',
    key: 'user-info',
    icon: useIcon('ant-design:user-outlined')
  },
  {
    type: 'divider'
  },
  {
    label: '退出登录',
    title: '退出登录',
    key: 'logout',
    icon: useIcon('ant-design:logout-outlined')
  }
])

function handleDropdown(key: Key) {
  switch (key) {
    case 'home':
      router.push({ name: 'home' })
      break
    case 'user-info':
      break
    case 'logout':
      Modal.confirm({
        title: '提示',
        content: '确定退出登录吗？',
        okText: '确定',
        centered: true,
        maskClosable: true,
        onOk: () => {
          useUserStoreHook().logout()
        }
      })
      break
    default:
      break
  }
}

// 由于selected-keys是v-model 故没有直接监听defaultSelect 改为监听路由位置
watch(
  () => router.currentRoute.value.name,
  (newVal) => {
    useCommonStoreHook().setCurrentRouteName(newVal as string)
  }
)

const emits = defineEmits<{
  (e: 'change', value: string): void
}>()

// 菜单变化时
function handleMenuChange(key: RouteRecordName) {
  if (layout.value === 'top') {
    router.push({ name: key })
  } else {
    emits('change', key.toString())
  }
}
</script>

<template>
  <div :class="`top-mix-header flex-bc px-4 ${menuDarkMode ? 'bg-[#001529] text-white' : ''}`">
    <div
      v-if="!hideLogo"
      :class="`sider-title dark:text-white font-bold h-full flex items-center justify-center px-2 w-[220px]`"
    >
      <img alt="logo" class="h-4/5 inline-block" src="@/assets/images/logo.png" />
      <span class="overflow-hidden text-ellipsis whitespace-nowrap text-[18px] ml-2">{{ title }}</span>
    </div>
    <a-menu
      :items="menus"
      :selected-keys="defaultSelect"
      :theme="menuDarkMode ? 'dark' : 'light'"
      mode="horizontal"
      @click="({ key }) => handleMenuChange(key as RouteRecordName)"
    ></a-menu>
    <!-- 右侧菜单 -->
    <div class="flex items-center h-full w-[300px]">
      <!-- 搜索 -->
      <GlobalSearch />
      <!-- 切换语言 -->
      <SwitchLanguage class="h-full" />
      <!-- 全屏 -->
      <FullScreen />
      <!-- 主题 -->
      <ToggleTheme />
      <!-- 刷新 -->
      <Refresh />
      <!-- 全局设置 -->
      <ConfigDrawer />
      <!-- 用户下拉框 -->
      <a-dropdown arrow class="cursor-pointer ml-2" placement="bottom">
        <div class="flex items-center gap-1">
          <a-avatar :src="avatar" size="small">
            <template #icon>
              <Icon class="cursor-pointer mt-[4px]" icon="ant-design:user-outlined" inline />
            </template>
          </a-avatar>
          <span class="text-gray-700 dark:text-white leading-[1]">{{ username }}</span>
          <Icon
            class="cursor-pointer text-[12px] text-gray-500 dark:text-gray-300"
            icon="ant-design:caret-down-filled"
          />
        </div>
        <template #overlay>
          <a-menu :items="dropdownMenuItems" @click="({ key }) => handleDropdown(key)" />
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-mix-header {
  height: v-bind(headerHeight);
  outline: 1px solid rgb(100 100 100 / 10%);
}

:deep(.ant-menu) {
  max-width: calc(100% - 300px - 220px);
  height: v-bind(headerHeight);
  line-height: v-bind(headerHeight);
  border: none;

  @apply dark:bg-[#001529];

  .ant-menu-item {
    height: 100%;
    line-height: v-bind(headerHeight);
  }

  .ant-menu-submenu {
    height: 100%;

    .ant-menu-submenu-title {
      height: 100%;
      line-height: v-bind(headerHeight);
    }
  }
}
</style>
