// 官方文档：https://kingsora.github.io/OverlayScrollbars/
import { ClickScrollPlugin, OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin } from 'overlayscrollbars'

export function scrollbarInstance(el: HTMLElement) {
  OverlayScrollbars.plugin([SizeObserverPlugin, ScrollbarsHidingPlugin, ClickScrollPlugin])
  return OverlayScrollbars(
    el,
    {
      overflow: {
        x: 'hidden'
      },
      update: {
        elementEvents: [
          ['img', 'load'],
          ['*', 'transitionstart transitionend']
        ]
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
