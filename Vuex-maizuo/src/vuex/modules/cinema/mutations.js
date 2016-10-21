import { FETCH_CINEMA_SUCCESS } from './mutation-types'

const mutations = {
  [FETCH_CINEMA_SUCCESS](state, data){
    state.cinemas = data.cinemas || {}
  }
}

export default mutations
