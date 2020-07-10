import ajax from './ajax'
const BASE_URL = 'http://localhost:3000'
const MAIN_API = '/api'
const MAIN_ADD = '/add'
const MAIN_SEARCH = '/search'
const MAIN_USER = '/user'

//获取验证码
export const reqCaptcha = () => ajax(BASE_URL + MAIN_API + '/getcaptcha', {}, 'GET')

//添加分类
export const addCategory = (data) => ajax(BASE_URL + MAIN_ADD + '/addcategory', {
    data
}, 'POST')

//获取分类列表
export const getCategoryList = () => ajax(BASE_URL + MAIN_SEARCH + '/getcategorylist', {}, 'POST')


//登陆
export const Login = (data) => ajax(BASE_URL + MAIN_USER + '/login', {
    data
}, 'POST')

//注册
export const Register = (data) => ajax(BASE_URL + MAIN_USER + '/register', {
    data
}, 'POST')

//获取登陆用户信息
export const getUserInfo = (data) => ajax(BASE_URL + MAIN_USER + '/', {
    data
}, 'GET')

//添加文章
export const addArticle = (data) => ajax(BASE_URL + MAIN_ADD + '/addarticle', {
    data
}, 'POST')

//获取文章列表
export const getArticleList = (data) => ajax(BASE_URL + MAIN_SEARCH + '/getarticlelist', {
    data
}, 'POST')

//获取文章
export const getArticle = (data) => ajax(BASE_URL + MAIN_SEARCH + '/getarticle', data, 'GET')

//获取最新文章列表
export const getNewArticleList = () => ajax(BASE_URL + MAIN_SEARCH + '/getnewarticlelist', {}, 'GET')