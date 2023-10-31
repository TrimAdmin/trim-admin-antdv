import { echarts, ECOption } from '@/plugins'
import { useConfigStoreHook } from '@/store'

export const useECharts = (el: HTMLElement | undefined, option: ECOption) => {
  if (!el) {
    console.error('Element for chart was not found!')
    return
  }
  let chart = echarts.init(el, 'light')
  watch(
    () => useConfigStoreHook().darkTheme,
    (dark) => {
      if (chart) {
        chart.dispose()
      }
      if (dark) {
        chart = echarts.init(el, 'dark')
        chart.setOption({
          ...option,
          backgroundColor: option.background || 'transparent',
          darkMode: true
        })
      } else {
        chart = echarts.init(el, 'light')
        chart.setOption(option)
      }
    },
    {
      immediate: true
    }
  )
  window.addEventListener('resize', () => {
    chart.resize()
  })
  onUnmounted(() => {
    chart.dispose()
  })
  return chart
}
