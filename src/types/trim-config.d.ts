import { colorSchemeList, i18nList, layoutList, routeAnimateList } from '@/constants'

interface ITrimConfig {
  // 主题
  theme: ITrimConfigTheme
  // 默认国际化语言
  defaultI18n: (typeof i18nList)[number]
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
  // 侧边栏暗色模式
  siderDarkMode: boolean
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

interface ITrimRouteAnimate {
  // 进入动画，设置animate.css中对应的类名，也可以自定义
  in?: string
  // 退出动画，设置animate.css中对应的类名，也可以自定义
  out?: string
  // 唯一标识
  value: string
  // 下拉框中显示的文本
  label: string
  // 持续时间，默认300ms
  duration?: string
}
