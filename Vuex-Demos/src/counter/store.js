import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 组件状态
const state = {
  count: 0,
  loading: false,
}

// 操作(事件)
const actions = {
  increment:({ commit }) => commit('INCREMENT'),
  decrement:({ commit }) => commit('DECREMENT'),
  incrementIfOdd:({ commit, state })=>{
    if((state.count + 1) % 2 === 0){
      commit('INCREMENT')
    }
  },
  incrementAsync:({ commit })=>{
    return new Promise((resolve, reject)=>{
      commit('UPDATE_LOADING')
      setTimeout(()=>{
        commit('INCREMENT')
        commit('UPDATE_LOADING')
        resolve()
      }, 1000)
    })
  }
}

// 状态更改
const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  },
  UPDATE_LOADING(state){
    state.loading = !state.loading
  }
}

// 计算属性
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? '偶数' : '奇数'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
