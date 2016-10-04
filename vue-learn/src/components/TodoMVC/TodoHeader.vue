<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo"
      autofocus autocomplete="off"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo">
  </header>
</template>

<script>
export default {
  name:'todo-header',
  data(){
    return {
      newTodo:''
    }
  },
  methods:{
    addTodo:function(){
      if (this.newTodo.trim()) {
       this.$dispatch('addTodo', this.newTodo)
       this.newTodo = ''
     }
   }
  }
}
</script>

<style>

</style>
