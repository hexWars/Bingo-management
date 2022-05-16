import axios from 'axios'

const request = axios.create({
  baseURL: '',
  timeout: 60000,
  withCredentials: true, // 允许携带cookies
})

// 请求拦截器
request.interceptors.request.use(
  config => {
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
