// 官方文档：https://kingsora.github.io/OverlayScrollbars/
import { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin } from 'overlayscrollbars'
import { useConfigStoreHook } from '@/store'

export function scrollbarInstance(el: HTMLElement) {
  OverlayScrollbars.plugin([SizeObserverPlugin, ScrollbarsHidingPlugin])
  return OverlayScrollbars(
    el,
    {
      overflow: {
        x: 'hidden'
      },
      showNativeOverlaidScrollbars: true,
      scrollbars: {
        visibility: 'auto',
        autoHide: 'leave',
        autoHideDelay: 500
      }
    },
    {}
  )
}
