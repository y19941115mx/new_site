// 关闭当前页面
export default () => {
  const instance = getCurrentInstance()
  const router = useRouter()
  const route = useRoute()
  const state = reactive({
    closeTag({ fullPath, reload, f5 }: Func.closeTag) {
      fullPath ? router.push(fullPath) : router.back()
      reload &&
        setTimeout(() => {
          instance?.appContext.config.globalProperties.$tagsbar.refreshSelectedTag(route)
        }, 500)

      f5 && setTimeout(() => window.location.reload(), 500)
    },
  })

  return toRefs(state)
}
