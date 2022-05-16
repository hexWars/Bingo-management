/*
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-16 16:13:03
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-16 16:18:16
 * @FilePath: \Bingo-manage\bingo-manage\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
.use(store)
.use(router)
.use(ElementPlus)
.mount('#app')
