import { IColorScheme, ITrimConfig } from './types/trim-config'

export const colorSchemeList: Array<IColorScheme> = [
  {
    scheme: 'antd',
    primaryColor: '#1778ff',
    name: 'Ant Design'
  },
  {
    scheme: 'element',
    primaryColor: '#409eff',
    name: 'Element Plus'
  },
  {
    scheme: 'tdesign',
    primaryColor: '#0052d9',
    name: 'TDesign'
  },
  {
    scheme: 'forest-green',
    primaryColor: '#07c160',
    name: '森林绿'
  },
  {
    scheme: 'bright-yellow',
    primaryColor: '#fcec0c',
    name: '明亮黄'
  },
  {
    scheme: 'energy-orange',
    primaryColor: '#fe7300',
    name: '能量橙'
  }
]

const trimConfig: ITrimConfig = {
  theme: {
    // 顶栏高度
    headerHeight: '48px',
    // 展开时侧边栏宽度
    siderWidth: '240px',
    // 折叠后侧边栏宽度
    siderWidthCollapse: '64px',
    // 布局模式
    layout: 'normal',
    // 配色方案
    colorScheme: 'antd',
    // 隐藏标签页
    hideTabs: false,
    // 隐藏logo
    hideLogo: false
  },
  // 默认国际化语言
  defaultI18n: 'zhHans'
}

export default trimConfig
