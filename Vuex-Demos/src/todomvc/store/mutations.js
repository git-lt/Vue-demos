import * as types from './mutation-types'


export const mutations = {
  [types.TODO_ADD](state, { text }){
    state.todos.push({
      text,
      done: false
    })
  },

  [types.TODO_DEL](state, { todo }){
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  [types.TODO_TOGGLE](state, { todo }){
    todo.done = !todo.done
  },

  [types.TODO_EDIT](state, { todo, value }){
    todo.text = value
  },

  [types.TODO_TOGGLE_ALL](state, { done }){
    state.todos.forEach((todo) => {
      todo.done = done
    })
  },

  [types.TODO_CLEAR_COMPLETED](state){
    state.todos = state.todos.filter(todo => !todo.done)
  }
}
