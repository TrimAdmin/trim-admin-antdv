import { IColorScheme, ITrimRouteAnimate } from '@/types/trim-config'
import { CI18n } from '@/constants/i18n.ts'

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

export const routeAnimateList: Array<ITrimRouteAnimate> = [
  {
    value: 'none',
    label: '无'
  },
  {
    in: 'slide-in-left-fade',
    out: 'slide-out-right-fade',
    value: 'slide-left-fade',
    label: '向左滑动淡入',
    duration: '500ms'
  },
  {
    in: 'slide-in-right-fade',
    out: 'slide-out-left-fade',
    value: 'slide-right-fade',
    label: '向右滑动淡入',
    duration: '500ms'
  },
  {
    in: 'slideInRight',
    out: 'slideOutLeft',
    value: 'slide-left',
    label: '向左滑动',
    duration: '500ms'
  },
  {
    in: 'slideInLeft',
    out: 'slideOutRight',
    value: 'slide-right',
    label: '向右滑动',
    duration: '500ms'
  },
  {
    in: 'fadeIn',
    out: 'fadeOut',
    value: 'fade',
    label: '淡入淡出'
  },
  {
    in: 'zoomIn',
    out: 'zoomOut',
    value: 'zoom',
    label: '缩放'
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

export const tabStyleList: Array<{ label: string; value: string }> = [
  {
    label: '隐藏',
    value: 'hide'
  },
  {
    label: '简约',
    value: 'normal'
  },
  {
    label: '卡片',
    value: 'card'
  }
]
