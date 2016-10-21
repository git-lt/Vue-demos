import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import { getAllMessages } from './store/actions'

Vue.config.debug = true

Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleDateString()
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

// 初始化state数据
getAllMessages(store)
