import { STORE_KEY } from './mutation-types'

const localStoragePlugin = store => {
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem(STORE_KEY, JSON.stringify(todos))
  })
}

export default [ localStoragePlugin ]
