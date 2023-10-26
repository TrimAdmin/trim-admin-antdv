import { ITrimConfig } from './types/trim-config'

const trimConfig: ITrimConfig = {
  theme: {
    // 顶栏高度
    headerHeight: 48,
    // 展开时侧边栏宽度
    siderWidth: 240,
    // 折叠后侧边栏宽度
    siderWidthCollapse: 64,
    // 侧边栏暗色模式
    menuDarkMode: true,
    // 布局模式 normal | top | mix
    layout: 'normal',
    // 配色方案 antd | element | tdesign | forest-green | bright-yellow | energy-orange
    colorScheme: 'antd',
    // 标签页样式 hide | normal | card
    tabStyle: 'normal',
    // 隐藏logo
    hideLogo: false,
    // 隐藏面包屑
    hideBreadcrumb: false,
    // 路由动画 none | slide-left-fade | slide-right-fade | slide-left | slide-right | fade | zoom
    routeAnimate: 'slide-right-fade'
  },
  // 默认国际化语言 zh-Hans | zh-Hant | en-US
  defaultI18n: 'zh-Hans'
}

export default trimConfig
