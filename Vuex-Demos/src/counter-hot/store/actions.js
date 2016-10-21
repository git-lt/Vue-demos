export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
export const incrementIfOdd = ({ commit, state }) => {
  if((state.count + 1) % 2 === 0){
    commit('INCREMENT')
  }
}
export const incrementAsync = ({ commit }) => {
  return new Promise((resolve, reject) => {
    commit('UPDATE_LOADING')
    setTimeout(() => {
      commit('INCREMENT')
      commit('UPDATE_LOADING')
      resolve()
    }, 1000)
  })
}
