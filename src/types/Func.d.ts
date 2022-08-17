declare namespace Func {
  /**
   * @param {String} fullPath 要跳转到那个页面的地址
   * @param {Boolean} reload 是否在跳转后重新渲染页面组件
   * @param {Boolean} f5 是否在跳转后刷新页面
   * @return {*}
   */
  interface closeTag {
    fullPath: string
    reload: boolean
    f5: boolean
  }
}
