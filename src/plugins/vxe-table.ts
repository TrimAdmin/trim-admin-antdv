import { Column, Grid, Table, VXETable } from 'vxe-table'
import XEUtils from 'xe-utils'
import type { App, Plugin } from 'vue'
import zhCN from 'vxe-table/es/locale/lang/zh-CN'
import 'vxe-table/styles/cssvar.scss'

VXETable.config({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
})

export function useTable(app: App) {
  const list: Plugin[] = [Table, Column, Grid]
  list.map((item) => app.use(item))
}
