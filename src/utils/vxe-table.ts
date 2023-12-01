import { VxeGridInstance } from 'vxe-table'
import { ShallowRef } from 'vue'

export function getCheckedRows(tableRef: ShallowRef<VxeGridInstance>) {
  return tableRef.value.getCheckboxRecords().concat(tableRef.value.getCheckboxReserveRecords())
}
