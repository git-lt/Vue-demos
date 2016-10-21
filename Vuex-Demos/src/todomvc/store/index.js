import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { STORE_KEY } from './mutation-types'
import * as getters from './getters'
import plugins from './plugins'

Vue.use(Vuex)

const state = {
  todos: JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  plugins
})
