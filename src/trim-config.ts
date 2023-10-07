import { ITrimConfig } from './types/trim-config'

const trimConfig: ITrimConfig = {
  theme: {
    // 顶栏高度
    headerHeight: '48px',
    // 展开时侧边栏宽度
    siderWidth: '240px',
    // 折叠后侧边栏宽度
    siderWidthCollapse: '64px',
    // 侧边栏暗色模式
    siderDarkMode: true,
    // 布局模式
    layout: 'normal',
    // 配色方案
    colorScheme: 'antd',
    // 隐藏标签页
    hideTabs: false,
    // 隐藏logo
    hideLogo: false,
    // 隐藏面包屑
    hideBreadcrumb: false,
    // 路由动画
    routeAnimate: 'slide-left'
  },
  // 默认国际化语言
  defaultI18n: 'zh-Hans'
}

export default trimConfig
