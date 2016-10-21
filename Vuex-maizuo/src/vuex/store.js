import Vue from 'vue'
import Vuex from 'vuex'
import film from './modules/film'
import app from './modules/app'
import cinema from './modules/cinema'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    film,
    app,
    cinema,
  },
  strict: debug
})
