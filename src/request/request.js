/*
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-16 16:18:44
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-16 16:20:12
 * @FilePath: \Bingo-manage\bingo-manage\src\request\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import { ElNotification } from 'element-plus'

const request = axios.create({
  baseURL: '',
  timeout: 60000,
  withCredentials: true, // 允许携带cookies
  auth: {
    username: 'testeradmin',
    password: 'testerpassword'
  }
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 手动设置字段判断外部请求
    const { selfHttpConfig = {} } = config;
    const { external = false } = selfHttpConfig;
    // 如果不是外部请求，统一加/api前缀
    if(!external) {
      config.url = '/api' + config.url
    }
    return config
  },
  error => {
    console.log(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data
    console.log('--------',res)
  //   if(res.status !== 200) {
  //     return Promise.reject(res.detail || res.msg)
  //   } else {
  //     return res
  //   }
  },
  // error => {
  //   console.log('err' + error),
  //   ElNotification({
  //     mesage: error.message,
  //     type: 'error',
  //     duration: 5 * 1000
  //   })
  //   return Promise.reject(error)
  // }
)

export default request
