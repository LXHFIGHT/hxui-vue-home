import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/github.css'
import HXUI from './hxui'
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
