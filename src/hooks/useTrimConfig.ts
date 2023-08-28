import trimConfig from '@/trim-config'
import { useConfigStoreHook } from '@/store'

export function useTrimConfig() {
  return trimConfig
}

export function setTrimConfig() {
  useConfigStoreHook().setConfig(trimConfig)
}
