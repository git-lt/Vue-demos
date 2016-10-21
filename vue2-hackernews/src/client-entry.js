require('es6-promise').polyfill()
import { app, store } from './app'

console.log('client-entry---'+ window.__INITIAL_STATE__)
store.replaceState(window.__INITIAL_STATE__)
app.$mount('#app')
