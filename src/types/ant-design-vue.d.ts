import { Key } from 'ant-design-vue/es/_util/type'

declare module 'ant-design-vue' {
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

declare module 'ant-design-vue/es/menu/src/hooks/useItems.d' {
  export type MenuItemType = {
    danger?: boolean
    disabled?: boolean
    icon?: JSX.Element | undefined | string | null
    key: string | Key
    order?: number
    label: string | undefined
    title: string | undefined
    type?: 'group' | 'divider'
    children?: Array<ItemType>
  }
}
