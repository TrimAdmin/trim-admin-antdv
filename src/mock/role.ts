import { SelectProps } from 'ant-design-vue/lib'

export const roleList: SelectProps['options'] = [
  {
    value: 1,
    label: '超级管理员'
  },
  {
    value: 2,
    label: '部门管理员'
  },
  {
    value: 3,
    label: '普通用户'
  }
]
