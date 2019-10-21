import App from './App.vue'
import HXUI from 'hxui'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
import 'hxui/lib/hxui.css'
import combineFilters from './tools/combineFilters'
const Vue = window.Vue
Vue.config.productionTip = false
Vue.use(VueHighlightJS)
Vue.use(HXUI) 
combineFilters(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
