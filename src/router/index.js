import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/global/Home.vue'
import Main from "../views/global/main.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home,
    children: [{
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/article',
      name: 'Article',
      component: () => import('../views/global/Article.vue'),
      meta: {
        title: "文章详情"
      }
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/global/Login.vue'),
    meta: {
      title: "欢迎登陆"
    }
  }, {
    path: '/register',
    name: 'Register',
    component: () => import('../views/global/Register.vue'),
    meta: {
      title: "个人注册"
    }
  }, {
    path: '/admin',
    name: 'AdminHome',
    component: () => import('../views/admin/adminhome.vue'),
    meta: {
      requireAuth: true,
    },
    children: [{
      path: '/admin',
      name: 'AdminIndex',
      component: () => import('../views/admin/homeindex/index.vue'),
      meta: {
        title: "后台首页"
      }
    }, {
      path: '/admin/addcategory',
      name: 'AddCategory',
      component: () => import('../views/admin/addcategory/index.vue'),
      meta: {
        title: "添加分类"
      }
    }, {
      path: '/admin/addarticle',
      name: 'AddArticle',
      component: () => import('../views/admin/addarticle/index.vue'),
      meta: {
        title: "添加文章"
      }
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (localStorage.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router