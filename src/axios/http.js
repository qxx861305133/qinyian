// https://juejin.cn/post/6844903652881072141

import axios from 'axios'; // 引入axios
import Qs from 'qs'; // 引入qs模块，用来序列化post类型的数据


const axiosInstance = axios.create({
    baseURL: location.origin + '/api',
    timeout: 50000, // 设置请求超时
    withCredentials: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }]
  })

// 请求拦截
axiosInstance.interceptors.request.use(
    config => {
        // 每次发送请求之前判断vuex中是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = store.state.token
        // token && (config.headers.Authorization = token)
        return config
    },
    error => {
        return Promise.error(error)
    })

// 响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                case 401:
                    console.log('未登录')
                    // router.replace({
                    //         path: '/login',
                    //         query: {
                    //             redirect: router.currentRoute.fullPath
                    //         }
                    //     });
                    break
                // 403 token过期
                case 403:
                    // 清除token
                    // localStorage.removeItem('token');
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    // setTimeout(() => {
                    //     router.replace({
                    //         path: '/login',
                    //         query: {
                    //             redirect: router.currentRoute.fullPath
                    //         }
                    //     });
                    // }, 1000);
                    console.log('登录过期，请重新登录')
                    break;
                // 404请求不存在
                case 404:
                    console.log('网络请求不存在')
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    console.log(error.response.data.message)
            }
            return Promise.reject(error.response)
        }
    }
)

export default axiosInstance