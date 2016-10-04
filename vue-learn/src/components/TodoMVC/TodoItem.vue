<template>
  <ul class="todo-list">
    <li class="todo" v-for="todo in todos" :class="{completed: todo.completed, editing: todo == editedTodo}">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="todo.completed">
        <label @dblclick="editTodo(todo)">{{todo.title}}</label>
        <button class="destroy"  @click="removeTodo(todo)"></button>
      </div>
      <input class="edit" type="text"
        v-model="todo.title"
        v-todo-focus="todo == editedTodo"
  			@blur="editDone(todo)"
  			@keyup.enter="editDone(todo)"
  			@keyup.esc="editCancel(todo)">
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'

export default {
  name:'todo-item',
  props:['todos'],
  data(){
    return {
      beforeEditCache:'',
      editedTodo: null
    }
  },
  methods:{
    removeTodo:function(todo){
      this.$dispatch('removeTodo', todo);
    },
    editTodo:function(todo){
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },
    editDone:function(todo){
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.$dispatch('removeTodo', todo);
      }
    },
    editCancel:function(todo){
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    }
  },
  directives: {
    'todo-focus': function (value) {
      if (!value) {
        return;
      }
      var el = this.el;
      Vue.nextTick(function () {
        el.focus();
      });
    }
  }
}

// editTodo: function (todo) {
//   this.beforeEditCache = todo.title;
//   this.editedTodo = todo;
// },
// editDone: function (todo) {
//   if (!this.editedTodo) {
//     return;
//   }
//   this.editedTodo = null;
//   todo.title = todo.title.trim();
//   if (!todo.title) {
//     this.removeTodo(todo);
//   }
// },
// editCancel: function (todo) {
//   this.editedTodo = null;
//   todo.title = this.beforeEditCache;
// },
</script>



<style>

</style>
