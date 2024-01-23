import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path"

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  base: "/gd-government/",
  plugins: [
    vue(),
    viteMockServe({
        supportTs: true, //是否开启支持ts
        mockPath: 'mock', //设置mockPath为根目录下的mock目录,为根目录
        localEnabled: true, //设置是否监视mockPath对应的文件夹内文件中的更改
        prodEnabled: true, //prod环境下是否可以使用mock
        logger: true, //是否在控制台显示请求日志
        injectCode: ` 
          import { setupProdMockServer } from './mock-prod-server';
          setupProdMockServer();
        `
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
})
