## 搭建前准备

1. `Vscode`: 开发工具
2. `Chrome`或者`Edge`：浏览器
3. `Nodejs`&`Yarn`：本地开发环境，安装 Node 后你会发现 npm 也会一起安装下来
4. `Vue.js devtools`：浏览器调试插件,Edge版本不需要翻墙
5. `Vue Language Features (Volar)`：Vscode 开发 vue3 必备插件，提供语法高亮提示
6. `Vue 3 Snippets`：vue3 快捷输入
6. `eslint`：代码自动检测与格式化

> 由于`Vue.js devtools` 需要到谷歌扩展商店才能下载,贴心 ❤️ 的`xy`已经为大家准备好了`crx`文件了,公众号回复:【`VueDevTools`】可自动获取哦 💪
## 项目启动

> 兼容性注意:Vite 需要 `Node.js` 版本 `>= 12.0.0`。
1. 本地启动，会启动 mock 服务

```bash
yarn 

# vite 默认 devsever 启动方式
yarn dev

# 增加 mock 的支持
yarn start 
```

2. 本地打包

```bash
# 编译默认模式为 prod
yarn build
```

## 约束代码风格

使用eslint插件约束代码风格，设置eslint插件的配置，保存代码时自动更新

## 环境变量配置

> `vite` 提供了两种模式：具有开发服务器的`开发模式`（development）和`生产模式`（production）

项目根目录新建:`.env.development` :

```env
NODE_ENV=development

VITE_APP_WEB_URL= 'YOUR WEB URL'
```

项目根目录新建:`.env.production` :

```env
NODE_ENV=production

VITE_APP_WEB_URL= 'YOUR WEB URL'
```

组件中使用：

```js
console.log(import.meta.env.VITE_APP_WEB_URL)
```

配置 `package.json`:

> 打包区分开发环境和生产环境

```json
"build:dev": "vue-tsc --noEmit && vite build --mode development",
"build:pro": "vue-tsc --noEmit && vite build --mode production",
```


## 使用的插件说明

> 可以查看官方文档：https://vitejs.cn/plugins/

- `@vitejs/plugin-vue` 提供 `Vue 3` 单文件组件支持
- `@vitejs/plugin-vue-jsx` 提供 Vue 3 `JSX` 支持（通过 专用的 Babel 转换插件）
- `@vitejs/plugin-legacy` 为打包后的文件提供传统浏览器`兼容性`支持
- `unplugin-vue-components` 组件的按需自动导入
- `vite-plugin-compression` 使用 gzip 或者 brotli 来压缩资源
- .....

## 特色功能
#### 挂载方法
```js
// windows下挂载了三个常用方法
    $message: MessageApiInjection
    $dialog: DialogApiInjection
    $loading: LoadingBarApiInjection
```

