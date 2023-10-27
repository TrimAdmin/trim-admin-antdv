import { CascaderOptionType } from 'ant-design-vue/es/cascader'

export const departmentList: CascaderOptionType[] = [
  {
    value: 1,
    label: 'TrimAdmin',
    children: [
      {
        value: 2,
        label: '技术部门',
        children: [
          {
            value: 5,
            label: '前端开发'
          },
          {
            value: 6,
            label: '后端开发'
          },
          {
            value: 7,
            label: '测试'
          },
          {
            value: 8,
            label: 'UI/UX'
          }
        ]
      },
      {
        value: 3,
        label: '电商部门',
        children: [
          {
            value: 9,
            label: '客服'
          },
          {
            value: 10,
            label: '美工'
          }
        ]
      },
      {
        value: 4,
        label: '产品部门'
      }
    ]
  }
]
