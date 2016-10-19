import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResour from 'vue-resource'
import FastClick from 'fastclick'
// import routerConfig from './routers'
import store from './vuex/store'
// // import App from './App'
//
// Vue.use(VueRouter)
Vue.use(VueResource)
// const router = new VueRouter({routes: routerConfig})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  // store,
  // render: h => h(App),
});
//
// window.addEventListener('load', ()=>{
//   FastClick.attach(document.body)
// })
