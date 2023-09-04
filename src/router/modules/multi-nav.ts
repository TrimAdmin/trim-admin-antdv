import { RouteRecordRaw } from 'vue-router'

export const multiNavRoutes: Array<RouteRecordRaw> = [
  {
    path: '/multi-nav',
    name: 'multi-nav',
    redirect: { name: 'multi-nav-1' },
    meta: {
      title: '多级菜单',
      icon: 'ant-design:unordered-list-outlined',
      order: 3
    },
    children: [
      {
        path: 'nav-1',
        name: 'multi-nav-1',
        redirect: { name: 'multi-nav-1-1' },
        meta: {
          title: '菜单1'
        },
        children: [
          {
            path: 'nav-1-1',
            name: 'multi-nav-1-1',
            component: () => import('@/views/multi-nav/nav-1/nav-1-1/nav-1-1-1/index.vue'),
            meta: {
              title: '菜单1-1-1'
            }
          },
          {
            path: 'nav-1-2',
            name: 'multi-nav-1-2',
            component: () => import('@/views/multi-nav/nav-1/nav-1-1/nav-1-1-2/index.vue'),
            meta: {
              title: '菜单1-1-2'
            }
          }
        ]
      },
      {
        path: 'nav-2',
        name: 'multi-nav-2',
        component: () => import('@/views/multi-nav/nav-2/index.vue'),
        meta: {
          title: '菜单2'
        }
      }
    ]
  }
]

export default multiNavRoutes
