import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { viteMockServe } from 'vite-plugin-mock'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'

import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default (env) =>
  defineConfig({
    base: './', //打包路径
    plugins: [
      vue(),
      Icons(),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        // eslint报错解决
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      }),
      Components({
        resolvers: [NaiveUiResolver(), IconsResolver({ componentPrefix: 'icon' })],
      }),
      viteMockServe({
        ignore: /^_/, // 忽略以下划线`_`开头的文件
        mockPath: 'mock', // 指定mock目录中的文件全部是mock接口
        supportTs: false, // mockPath目录中的文件是否支持ts文件，现在我们不使用ts，所以设为false
        localEnabled: env.mode === 'mock', // 开发环境是否开启mock功能
        prodEnabled: env.mode === 'mock', // 生产环境是否开启mock功能
        injectCode: `
        import { setupProdMockServer } from '../mock/_createMockServer';
        setupProdMockServer(); 
      `, // 注册 mock文件夹下所有接口到mock服务器中，建议所有mock接口以/mock开头
      }),
    ],
    // 配置别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve('src/assets/css/main.less')}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
    //启动服务配置
    server: {
      host: '0.0.0.0',
      port: 8000,
      open: true,
      https: false,
      proxy: {
        // '/api': {
        //   target: 'http://localhost:8888/',  //设置代理地址 需要设置后端代理时在这里进行配置
        //   changeOrigin: true,
        // },
      },
    },
    // 生产环境打包配置
    //去除 console debugger
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  })
