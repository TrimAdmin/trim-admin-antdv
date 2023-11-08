import type { App, Directive, DirectiveBinding } from 'vue'
import { createVNode, defineComponent, h, reactive, render, VNode } from 'vue'

import Loading from '@/components/internal/loading/index.vue'

export type LoadingType = {
  tip?: string
  size?: 'small' | 'default' | 'large'
  loading: boolean
  lightBackgroundColor?: string
  darkBackgroundColor?: string
}

export function createLoading(props?: Partial<LoadingType>, target?: HTMLElement, wait = false) {
  let vm: VNode | null = null
  const data = reactive({
    tip: '',
    loading: true,
    ...props
  })

  const LoadingWrap = defineComponent({
    render() {
      return h(Loading, { ...data })
    }
  })

  vm = createVNode(LoadingWrap)

  if (wait) {
    setTimeout(() => {
      render(vm, document.createElement('div'))
    }, 0)
  } else {
    render(vm, document.createElement('div'))
  }

  function close() {
    if (vm?.el && vm.el.parentNode) {
      vm.el.parentNode.removeChild(vm.el)
    }
  }

  function open(target: HTMLElement = document.body) {
    if (!vm || !vm.el) {
      return
    }
    target.appendChild(vm.el as HTMLElement)
  }

  if (target) {
    open(target)
  }
  return {
    vm,
    close,
    open,
    setTip: (tip: string) => {
      data.tip = tip
    },
    setLoading: (loading: boolean) => {
      data.loading = loading
    },
    get loading() {
      return data.loading
    },
    get $el() {
      return vm?.el as HTMLElement
    }
  }
}

/**
 * 元素loading态指令
 */
const loadingDirective: Directive = {
  mounted(el, binding: DirectiveBinding<boolean>) {
    // console.log(binding.value)
    const tip = el.getAttribute('ant-loading-tip')
    const lightBackgroundColor = el.getAttribute('ant-loading-light-background')
    const darkBackgroundColor = el.getAttribute('ant-loading-dark-background')
    const size = el.getAttribute('ant-loading-size')
    const fullscreen = binding.modifiers.fullscreen
    el.instance = createLoading(
      {
        tip: tip || '加载中...',
        lightBackgroundColor: lightBackgroundColor || 'rgba(255, 255, 255, 0.25)',
        darkBackgroundColor: darkBackgroundColor || 'rgba(20, 20, 20, 0.25)',
        size: size || 'large',
        loading: binding.value
      },
      fullscreen ? document.body : el
    )
  },
  updated(el, binding) {
    const instance = el.instance
    if (!instance) return
    instance.setTip(el.getAttribute('ant-loading-tip'))
    if (binding.oldValue !== binding.value) {
      instance.setLoading?.(binding.value && !instance.loading)
    }
  },
  unmounted(el) {
    el?.instance?.close()
  }
}

export function setupLoadingDirective(app: App) {
  app.directive('loading', loadingDirective)
}

export default loadingDirective
