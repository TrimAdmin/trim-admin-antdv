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
    // 布局模式
    layout: 'normal',
    // 配色方案
    colorScheme: 'antd',
    // 标签页样式
    tabStyle: 'normal',
    // 隐藏logo
    hideLogo: false,
    // 隐藏面包屑
    hideBreadcrumb: false,
    // 路由动画
    routeAnimate: 'slide-right-fade'
  },
  // 默认国际化语言
  defaultI18n: 'zh-Hans'
}

export default trimConfig
