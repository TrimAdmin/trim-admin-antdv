// 官方文档：https://kingsora.github.io/OverlayScrollbars/
import { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin } from 'overlayscrollbars'

export function scrollbarInstance(el: HTMLElement) {
  OverlayScrollbars.plugin([SizeObserverPlugin, ScrollbarsHidingPlugin, ClickScrollPlugin])
  return OverlayScrollbars(
    el,
    {
      overflow: {
        x: 'hidden'
      },
      showNativeOverlaidScrollbars: false,
      scrollbars: {
        visibility: 'auto',
        autoHide: 'leave',
        autoHideDelay: 500,
        dragScroll: true,
        clickScroll: true
      }
    },
    {}
  )
}
