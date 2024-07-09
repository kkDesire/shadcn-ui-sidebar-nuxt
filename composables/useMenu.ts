import { createSharedComposable } from '@vueuse/core'
import type { Group } from '~/types'

function _useMenu() {
  const { currentRoute } = useRouter()
  const menuList = computed<Group[]>(() => {
    return [
      {
        groupLabel: '',
        menus: [
          {
            href: '/dashboard',
            label: 'Dashboard',
            active: currentRoute.value.fullPath.includes('/dashboard'),
            icon: 'lucide:layout-grid',
            submenus: [],
          },
        ],
      },
      {
        groupLabel: 'Contents',
        menus: [
          {
            href: '',
            label: 'Posts',
            active: currentRoute.value.fullPath.includes('/posts'),
            icon: 'lucide:square-pen',
            submenus: [
              {
                href: '/posts',
                label: 'All Posts',
                active: currentRoute.value.fullPath === '/posts',
              },
              {
                href: '/posts/new',
                label: 'New Post',
                active: currentRoute.value.fullPath === '/posts/new',
              },
            ],
          },
          {
            href: '/categories',
            label: 'Categories',
            active: currentRoute.value.fullPath.includes('/categories'),
            icon: 'lucide:bookmark',
            submenus: [],
          },
          {
            href: '/tags',
            label: 'Tags',
            active: currentRoute.value.fullPath.includes('/tags'),
            icon: 'lucide:tag',
            submenus: [],
          },
        ],
      },
      {
        groupLabel: 'Settings',
        menus: [
          {
            href: '/users',
            label: 'Users',
            active: currentRoute.value.fullPath.includes('/users'),
            icon: 'lucide:users',
            submenus: [],
          },
          {
            href: '/account',
            label: 'Account',
            active: currentRoute.value.fullPath.includes('/account'),
            icon: 'lucide:settings',
            submenus: [],
          },
        ],
      },
    ]
  })

  return {
    menuList,
  }
}

export const useMenu = createSharedComposable(_useMenu)
