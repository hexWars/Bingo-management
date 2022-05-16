/*
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-16 18:32:38
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-16 18:50:35
 * @FilePath: \Bingo-manage\bingo-manage\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'//这里
import AutoImport from 'unplugin-auto-import/vite'

import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ]
})
