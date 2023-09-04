import trimConfig from '@/trim-config'
import { useConfigStoreHook } from '@/store'

export function useTrimConfig() {
  return trimConfig
}

export function setTrimConfig() {
  useConfigStoreHook().setConfig(Object.entries(useConfigStoreHook().config).length ? useConfigStoreHook().config : trimConfig)
}
