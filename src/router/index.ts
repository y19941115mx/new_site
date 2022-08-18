import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { PageEnum } from '@/enum/pageEnum'

const Layout = () => import('@/layout/index.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: PageEnum.BASE_HOME,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Layout,
    meta: {
      isRoot: true,
      icon: 'ic:round-construction',
    },
    children: [
      {
        path: 'index',
        name: `about_index`,
        meta: {
          title: '关于',
          activeMenu: 'about_index',
        },
        component: () => import('@/views/about/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
