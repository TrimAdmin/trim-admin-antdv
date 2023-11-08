import { Component } from 'vue'

export interface MenuItemType {
  label?: string
  title?: string
  key?: string
  order?: number
  icon?: string | Component
  children?: Array<MenuItemType>
}
