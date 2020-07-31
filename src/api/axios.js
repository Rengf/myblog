import axios from "axios"

import router from "../router"



axios.interceptors.request.use(
    config => {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        if (localStorage.token) {
            config.headers.Authorization = `token ${localStorage.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

axios.interceptors.response.use(
    response => {
        // 方法一: 根据返回信息
        // response 的信息内容不同, 如请求成功, 但提示Token 超时,
        // 这是 也可以 弹框 提示, 也可以直接跳转至登录页, 例如
        // console.log(response.data.message.indexOf('token'))
        if (response.data.code == -1) {
            router.push({
                path: '/login',
                query: {
                    redirect: router.currentRoute.fullPath
                }
            })
        }
        return response;
    },
    error => {
        if (error.response) {
            // 方法二: 根据返回状态
            switch (error.response.code) {
                case 1:
                    // 返回 401 清除token信息并跳转到登录页面
                    localStorage.removeItem("token")
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    })
                    // console.log(error.response)
            }
        }
        return Promise.reject(error.response) // 返回接口返回的错误信息
    });

export default axios