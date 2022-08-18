<template>
  <n-menu
    :options="menus"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :indent="24"
    @update:expanded-keys="menuExpanded"
    @update:value="clickMenuItem"
  />
</template>

<script lang="ts">
import { generatorMenu } from '@/utils/menu'
import { routes } from '@/router'

export default defineComponent({
  props: {
    mode: {
      // 菜单模式
      type: String,
      default: 'vertical',
    },
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean,
    },
  },
  emits: ['click-menu-item'],
  setup(props, { emit }) {
    // 当前路由
    const currentRoute = useRoute()
    const router = useRouter()
    const menus = generatorMenu(routes)
    const selectedKeys = ref<string>(currentRoute.name as string)
    const headerMenuSelectKey = ref<string>('')

    // 获取当前打开的子菜单
    const matched = currentRoute.matched

    const getOpenKeys = matched && matched.length ? matched.map((item) => item.name) : []

    const state = reactive({
      openKeys: getOpenKeys,
    })

    // 点击菜单
    function clickMenuItem(key: string) {
      if (/http(s)?:/.test(key)) {
        window.open(key)
      } else {
        router.push({ name: key })
      }
      emit('click-menu-item' as any, key)
    }

    //展开菜单
    function menuExpanded(openKeys: string[]) {
      if (!openKeys) {
        return
      }
      const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1)
      const isExistChildren = findChildrenLen(latestOpenKey as string)
      state.openKeys = isExistChildren ? (latestOpenKey ? [latestOpenKey] : []) : openKeys
    }

    //查找是否存在子路由
    function findChildrenLen(key: string) {
      if (!key) {
        return false
      }
      const subRouteChildren: string[] = []
      for (const { children, key } of unref(menus)) {
        if (children && children.length) {
          subRouteChildren.push(key as string)
        }
      }
      return subRouteChildren.includes(key)
    }

    return {
      ...toRefs(state),
      menus,
      selectedKeys,
      headerMenuSelectKey,
      clickMenuItem,
      menuExpanded,
    }
  },
})
</script>
