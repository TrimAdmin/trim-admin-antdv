declare module 'ant-design-vue' {
  import { Key } from 'ant-design-vue/es/_util/type'
  export type ItemType = {
    danger?: boolean
    disabled?: boolean
    icon?: JSX.Element | undefined | string
    key: string | Key
    order?: number
    label: string | undefined
    title: string | undefined
    type?: 'group' | 'divider'
    children?: Array<ItemType>
  }
}
