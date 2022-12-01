// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui';  //导入组件
import 'element-ui/lib/theme-chalk/index.css';  //导入样式

import axios from 'axios'

import App from './App'
import router from './router'

Vue.use(ElementUI); //全局引用
//全局配置
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
