import Utils from './Utils.js';

class TodoModel {
	constructor(key){
		this.key = key;
		this.todos = Utils.store(key);
	}

	save() {
		Utils.store(this.key, this.todos);
	}

	addTodo(title) {
		this.todos = this.todos.concat({
			title: title,
			completed: false
		});
		this.save();
		return this.todos;
	}

	removeTodo(todo) {
		this.todos = this.todos.filter(function (candidate) {
			return candidate !== todo;
		});

		this.save();
		return this.todos;
	};

	toggleAll(checked) {
		this.todos = this.todos.map(function (todo) {
			return Utils.extend({}, todo, {completed: checked});
		});

		this.save();
		return this.todos;
	};

	clearCompleted() {
		this.todos = this.todos.filter(function (todo) {
			return !todo.completed;
		});

		this.save();
		return this.todos;
	};

}

export default TodoModel;
