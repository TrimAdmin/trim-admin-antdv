import { colorSchemeList, layoutList, routeAnimateList } from '@/trim-config'

interface ITrimConfig {
  // 主题
  theme: ITrimConfigTheme
  // 默认国际化语言
  defaultI18n: 'zhHans' | 'zhHant' | 'enUS'
}

interface IColorScheme {
  // 配色方案
  scheme: string
  // 主色
  primaryColor: string
  // 名称
  name: string
}

interface ITrimConfigTheme {
  // 顶栏高度
  headerHeight: string | number
  // 侧边栏宽度
  siderWidth: string | number
  // 侧边栏折叠宽度
  siderWidthCollapse: string | number
  // 布局类型
  layout: (typeof layoutList)[number]['value']
  // 配色方案
  colorScheme: (typeof colorSchemeList)[number]['scheme']
  // 隐藏标签
  hideTabs: boolean
  // 隐藏logo
  hideLogo: boolean
  // 隐藏面包屑
  hideBreadcrumb: boolean
  // 路由动画
  routeAnimate: (typeof routeAnimateList)[number]['value']
}
