import Vue from 'vue'
import router from '@/router/index'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI)
Vue.config.productionTip = false

import '@/assets/css/reset.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
