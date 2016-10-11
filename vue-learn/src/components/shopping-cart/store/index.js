import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vue/logger'

import product from './product'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules:{
    product
  }
  static: debug,
  middlewares: debug ? [logger()]:[]
})
