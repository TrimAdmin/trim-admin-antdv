import { Column, Grid, Table, VXETable } from 'vxe-table'
import XEUtils from 'xe-utils'
import type { App, Plugin } from 'vue'
import zhCN from 'vxe-table/es/locale/lang/zh-CN'
import zhTW from 'vxe-table/es/locale/lang/zh-TW'
import enUS from 'vxe-table/es/locale/lang/en-US'
import 'vxe-table/styles/cssvar.scss'
import { useConfigStoreHook } from '@/store'

function getLocale() {
  switch (useConfigStoreHook().i18n) {
    case 'zh-Hans':
      return zhCN
    case 'zh-Hant':
      return zhTW
    case 'en-US':
      return enUS
    default:
      return zhCN
  }
}

VXETable.config({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(getLocale(), key), args)
})

export function useTable(app: App) {
  const list: Plugin[] = [Table, Column, Grid]
  list.map((item) => app.use(item))
}
