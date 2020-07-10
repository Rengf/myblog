import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import moment from 'moment'
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "github-markdown-css";

import message from "./components/public/message/message"



import './assets/css/iconfont/iconfont.css'
import './assets/css/iconfont/iconfont.js'


router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})

Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})


Vue.config.productionTip = false

Vue.use(mavonEditor)
Vue.use(message)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')