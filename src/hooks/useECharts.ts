import { echarts, ECOption } from '@/plugins'
import { useConfigStoreHook } from '@/store'

export const useECharts = (el: HTMLElement | undefined | null, option: ECOption) => {
  const isDark = useConfigStoreHook().darkTheme
  let chart = echarts.init(el, isDark ? 'dark' : 'light')
  chart.setOption({
    ...option,
    backgroundColor: option.background ? option.background : 'transparent',
    darkMode: isDark
  })
  if (isDark) {
    chart.dispose()
    chart = echarts.init(el, 'dark')
    chart.setOption({
      ...option,
      backgroundColor: option.background ? option.background : 'transparent',
      darkMode: true
    })
  } else {
    chart.dispose()
    chart = echarts.init(el, 'light')
    chart.setOption(option)
  }
  window.addEventListener('resize', () => {
    chart.resize()
  })
}
