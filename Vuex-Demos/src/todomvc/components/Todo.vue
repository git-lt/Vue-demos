<template lang="html">
  <li class="todo" :class="{ completed: todo.done, editing: editing }">

    <div class="view">
      <input type="checkbox" class="toggle"
        :checked="todo.done"
        @change="toggleTodo({ todo: todo })"
      >
      <label @dblclick="editing = true">{{todo.text}}</label>
      <button class="destroy" @click="deleteTodo({todo: todo})"></button>
    </div>

    <input type="text" class="edit"
      v-show="editing"
      v-focus="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit"
    >
  </li>

</template>

<script>
import { mapMutations } from "vuex"
import * as types from '../store/mutation-types'

export default {
  name: 'Todo',
  props: ['todo'],
  data () {
    return {
      editing: false
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  methods: {
    ...mapMutations({
      editTodo: types.TODO_EDIT,
      toggleTodo: types.TODO_TOGGLE,
      deleteTodo: types.TODO_DEL
    }),
    doneEdit(e){
      const value = e.target.value.trim()
      const { todo } = this
      if(!value){
        this.deleteTodo({ todo })
      }else if(this.editing){
        this.editTodo({
          todo,
          value
        })
        this.editing = false
      }
    },
    cancelEdit(e){
      e.target.value = this.todo.text
      this.editing = false
    }
  },
}
</script>

<style lang="css">
</style>
