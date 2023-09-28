import trimConfig from '@/trim-config'
import { useConfigStoreHook } from '@/store'

export function useTrimConfig() {
  return trimConfig
}

export function setTrimConfig() {
  useConfigStoreHook().setConfig(Object.entries(useConfigStoreHook().config).length ? useConfigStoreHook().config : trimConfig)
}

// 头部高度
export const headerHeight = computed<string | number>(() => {
  return typeof useTrimConfig().theme.headerHeight === 'string' ? useTrimConfig().theme.headerHeight : useTrimConfig().theme.headerHeight + 'px'
})

// 带tabs的头部高度
export const headerHeightWithTabs = computed<string | number>(() => {
  if (useConfigStoreHook().config.theme.hideTabs) {
    return typeof useTrimConfig().theme.headerHeight === 'string' ? useTrimConfig().theme.headerHeight : useTrimConfig().theme.headerHeight + 'px'
  } else {
    // tab栏高度42px
    return typeof useTrimConfig().theme.headerHeight === 'string'
      ? Number(useTrimConfig().theme.headerHeight.toString().substring(0, useTrimConfig().theme.headerHeight.toString().indexOf('p'))) + 42 + 'px'
      : Number(useTrimConfig().theme.headerHeight) + 42 + 'px'
  }
})

// 侧边栏宽度
export const siderWidth = computed<string | number>(() =>
  !useConfigStoreHook().menuCollapsed
    ? // 侧边栏展开宽度
      typeof useTrimConfig().theme.siderWidth === 'string'
      ? useTrimConfig().theme.siderWidth
      : useTrimConfig().theme.siderWidth + 'px'
    : // 侧边栏收缩宽度
    typeof useTrimConfig().theme.siderWidthCollapse === 'string'
    ? useTrimConfig().theme.siderWidthCollapse
    : useTrimConfig().theme.siderWidthCollapse + 'px'
)
