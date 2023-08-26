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
    headerHeight: '48px',
    siderWidth: '240px',
    siderWidthCollapse: '64px',
    layout: 'normal',
    colorScheme: 'antd'
  }
}

export default trimConfig
