export const count = state => state.count
export const loading = state => state.loading
export const evenOrOdd = state => state.count % 2 === 0 ? '偶数' : '奇数'
export const recentHistory = state => {
  const end = state.history.length
  const start = Math.max(0, end - 5)
  return state.history.slice(start, end).join(', ')
}
