import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import Vuelazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

fastclick.attach(document.body)
/* eslint-disable no-new */
Vue.use(Vuelazyload,{
  loading:require('./common/image/default.png')
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
