<template>
  <footer class="footer">
		<span class="todo-count">
			<strong v-text="remaining"></strong> {{remaining | pluralize 'item'}} left
    </span>
		<ul class="filters">
			<li>
        <a v-link="'/todomvc?type=all'" :class="{selected: visibility == 'all'}">All</a>
      </li>
			<li>
        <a v-link="'/todomvc?type=active'" :class="{selected: visibility == 'active'}">Active</a>
      </li>
			<li>
        <a v-link="'/todomvc?type=completed'" :class="{selected: visibility == 'completed'}">Completed</a>
      </li>
		</ul>
		<button class="clear-completed"  @click="clearCompleted" v-show="completed">
			Clear completed
		</button>
	</footer>
</template>

<script>
export default {
  name:'todo-footer',
  props:['remaining','completed','visibility'],
  methods:{
    clearCompleted:function(){
      this.$dispatch('clearCompleted');
    }
  }
}
</script>

<style>

</style>
