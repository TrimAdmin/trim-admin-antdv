import { VxeGridInstance } from 'vxe-table'
import { ShallowRef } from 'vue'
import Sortable, { SortableEvent } from 'sortablejs'
import { useToast } from '@/hooks/useToast.tsx'
import { useI18nHook } from '@/hooks/useI18nHook.ts'

const { t } = useI18nHook()

export function useVxeTableDrag(tableRef: ShallowRef<VxeGridInstance>) {
  return Sortable.create(tableRef.value.$el.querySelector('.body--wrapper>.vxe-table--header .vxe-header--row'), {
    handle: '.vxe-header--column',
    onEnd: async (sortableEvent: SortableEvent) => {
      const targetThElem = sortableEvent.item
      const newIndex = sortableEvent.newIndex as number
      const oldIndex = sortableEvent.oldIndex as number
      const { fullColumn, tableColumn } = tableRef.value.getTableColumn()
      const wrapperElem = targetThElem.parentNode as HTMLElement
      const newColumn = fullColumn[newIndex]
      const oldColumn = fullColumn[oldIndex]
      if (newColumn.fixed || oldColumn.fixed) {
        // 错误的移动
        const oldThElem = wrapperElem.children[oldIndex] as HTMLElement
        if (newIndex > oldIndex) {
          wrapperElem.insertBefore(targetThElem, oldThElem)
        } else {
          wrapperElem.insertBefore(targetThElem, oldThElem ? oldThElem.nextElementSibling : oldThElem)
        }
        useToast().message.warn(t('message.cannot-drag-fixed'))
        return
      }
      // 获取列索引 columnIndex > fullColumn
      const oldColumnIndex = tableRef.value.getColumnIndex(tableColumn[oldIndex])
      const newColumnIndex = tableRef.value.getColumnIndex(tableColumn[newIndex])

      // 移动到目标列
      const currRow = fullColumn.splice(oldColumnIndex, 1)[0]

      fullColumn.splice(newColumnIndex, 0, currRow)
      await tableRef.value.loadColumn(fullColumn)
    }
  })
}
