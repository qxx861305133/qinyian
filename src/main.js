import Vue from 'vue'
import router from '@/router/index'
import App from './App.vue'
import axios from '@/axios/http'
import api from '@/api/api'
import ViewUI from 'view-design';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '@/assets/css/change-iview.less';
const logo = require('@/assets/image/logo.png')

Vue.use(ViewUI)
Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$api = api

//全局loading指定
const newEl = document.createElement('div')
newEl.id = 'loading'
newEl.innerHTML = `
<div class="text-center">
    <img id="loading-logo" src="${logo}" />
    <p class="fz-14 block margin-t-8">吃饭中...</p>
  </div>
`
Vue.directive('loading', {
  bind: function (el) {
    el.appendChild(newEl)
  },
  update: (el, binding) => {
    if (!binding.value) {
      const loading = document.getElementById('loading')
      if (!loading || !loading.parentNode) return
      loading.parentNode.removeChild(loading)
    } else {
      el.appendChild(newEl)
    }
  }
})

import '@/assets/css/reset.css'
import '@/assets/css/common.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
