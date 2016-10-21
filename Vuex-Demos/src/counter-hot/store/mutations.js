export const INCREMENT = state => {
  state.count++
  state.history.push('INCREMENT')
}

export const DECREMENT = state => {
  state.count--
  state.history.push('DECREMENT')
}

export const UPDATE_LOADING = state => {
  state.loading = !state.loading
}
