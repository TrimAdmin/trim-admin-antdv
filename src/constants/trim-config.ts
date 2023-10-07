import { IColorScheme } from '@/types/trim-config'
import { CI18n } from '@/constants/i18n.ts'

export const colorSchemeList: Array<IColorScheme> = [
  {
    scheme: 'antd',
    primaryColor: '#1778FF',
    name: 'Ant Design'
  },
  {
    scheme: 'element',
    primaryColor: '#409EFF',
    name: 'Element Plus'
  },
  {
    scheme: 'tdesign',
    primaryColor: '#0052D9',
    name: 'TDesign'
  },
  {
    scheme: 'forest-green',
    primaryColor: '#07C160',
    name: '森林绿'
  },
  {
    scheme: 'bright-yellow',
    primaryColor: '#FCEC0C',
    name: '明亮黄'
  },
  {
    scheme: 'energy-orange',
    primaryColor: '#FE7300',
    name: '能量橙'
  }
]

export const routeAnimateList: Array<{
  value: string
  label: string
}> = [
  {
    value: 'none',
    label: '无'
  },
  {
    value: 'slide-left',
    label: '向左滑动'
  },
  {
    value: 'slide-right',
    label: '向右滑动'
  },
  {
    value: 'fade',
    label: '淡入淡出'
  },
  {
    value: 'scale-up',
    label: '放大淡入淡出'
  },
  {
    value: 'scale-down',
    label: '缩小淡入淡出'
  }
]

export const layoutList: Array<{ label: string; value: string }> = [
  {
    label: '普通布局',
    value: 'normal'
  },
  {
    label: '顶栏布局',
    value: 'top'
  },
  {
    label: '混合布局',
    value: 'mix'
  }
]

export const i18nList: Array<string> = Object.keys(CI18n)
