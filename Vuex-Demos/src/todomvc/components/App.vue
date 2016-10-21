<style src="todomvc-app-css/index.css"></style>

<template lang="">
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input type="text" class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo"
      >
    </header>

    <section class="main">
      <input type="checkbox" class="toggle-all"
        :checked="allChecked"
        @change="toggleAll({ done: !allChecked })"
      >
      <ul class="todo-list">
        <Todo v-for="todo in filteredTodos" :todo="todo"></Todo>
      </ul>
    </section>

    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong> {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a :href="'#/' + key"
            :class="{ selected: visibility === key}"
            @click="visibility = key"
          >{{ key | capitalize }}</a>
        </li>
      </ul>
      <button class="clear-completed"
        v-show="todos.lenght > remaining"
        @click="clearCompleted"
      >Clear completed</button>
    </footer>

  </section>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Todo from './Todo.vue'
import * as types from '../store/mutation-types'

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}

export default {
  data () {
    return {
      visibility: 'all',
      filters,
    }
  },
  computed: {
    ...mapGetters([
      'todos',
      'allChecked',
      'remaining'
    ]),
    filteredTodos () {
      return filters[this.visibility](this.todos)
    }
  },
  methods: {
    addTodo(e){
      var text = e.target.value
      if (text.trim()) {
        this.$store.commit(types.TODO_ADD, { text })
      }
      e.target.value = ''
    },
    ...mapMutations({
      toggleAll:types.TODO_TOGGLE_ALL,
      clearCompleted:types.TODO_CLEAR_COMPLETED
    })
  },
  components: { Todo },
  filters:{
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>
