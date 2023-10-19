import { IColorScheme, ITrimRouteAnimate } from '@/types/trim-config'
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

export const routeAnimateList: Array<ITrimRouteAnimate> = [
  {
    value: 'none',
    label: '无'
  },
  {
    in: 'slideInLeftFade',
    out: 'slideOutRightFade',
    value: 'slide-left-fade',
    label: '向左滑动淡入',
    duration: '500ms'
  },
  {
    in: 'slideInRightFade',
    out: 'slideOutLeftFade',
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
