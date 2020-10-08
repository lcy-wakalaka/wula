/**
 *  请求模块
 */

import axios from 'axios'
//创建一个实例---复制一个axios
//通过这个实例去发请求，把需要的配置给这个实例去实现
const request = axios.create({
    baseURL: 'http://wula/', //请求基础路径，减少路径的长度
})

//请求拦截器

//响应拦截器

export default request

