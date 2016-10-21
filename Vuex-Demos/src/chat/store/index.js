import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
// import createLogger from ''

Vue.use(Vuex)

const state = {
  currentThreadID:null,
  threads:{},
  message:{},
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  // plugins:
})
