import {
  // 全局对象
  VXETable,
  // 表格功能
  Filter,
  Edit,
  Menu,
  Export,
  Keyboard,
  Validator,
  // 可选组件
  Icon,
  Column,
  Colgroup,
  Grid,
  Tooltip,
  Toolbar,
  Pager,
  // Form,
  // FormItem,
  // FormGather,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Switch,
  Input,
  Select,
  // Optgroup,
  Option,
  // Textarea,
  Button,
  Modal,
  List,
  // Pulldown,
  // 表格
  Table
} from 'vxe-table'
import XEUtils from 'xe-utils'
import type { App, Plugin } from 'vue'
import zhCN from 'vxe-table/es/locale/lang/zh-CN'
import zhTW from 'vxe-table/es/locale/lang/zh-TW'
import enUS from 'vxe-table/es/locale/lang/en-US'
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
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(getLocale(), key), args),
  pager: {
    layouts: ['Total', 'PrevPage', 'JumpNumber', 'NextPage', 'Sizes', 'FullJump']
  },
  table: {
    border: true,
    stripe: true,
    round: true,
    showOverflow: 'tooltip',
    rowConfig: {
      useKey: true,
      isHover: true,
      keyField: 'id'
    },
    resizableConfig: {
      minWidth: 120
    },
    columnConfig: {
      resizable: true
    },
    checkboxConfig: {
      reserve: true
    }
  }
})

export function useTable(app: App) {
  const list: Plugin[] = [
    // 表格功能
    Filter,
    Edit,
    Menu,
    Export,
    Keyboard,
    Validator,

    // 可选组件
    Icon,
    Column,
    Colgroup,
    Grid,
    Tooltip,
    Toolbar,
    Pager,
    // Form,
    // FormItem,
    // FormGather,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    RadioButton,
    Switch,
    Input,
    Select,
    // Optgroup,
    Option,
    // Textarea,
    Button,
    Modal,
    List,
    // Pulldown,
    // 表格
    Table
  ]
  list.forEach((item) => app.use(item))
}
