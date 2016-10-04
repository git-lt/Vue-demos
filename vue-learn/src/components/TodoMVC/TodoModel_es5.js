import Utils from './Utils.js';


let TodoModel = function (key) {
	this.key = key;
	this.todos = Utils.store(key);
};

TodoModel.prototype.inform = function () {
	Utils.store(this.key, this.todos);
};

TodoModel.prototype.addTodo = function (title) {
	this.todos = this.todos.concat({
		title: title,
		completed: false
	});
	this.inform();
	return this.todos;
};

TodoModel.prototype.removeTodo = function (todo) {
	this.todos = this.todos.filter(function (candidate) {
		return candidate !== todo;
	});

	this.inform();
	return this.todos;
};

TodoModel.prototype.toggleAll = function (checked) {
	this.todos = this.todos.map(function (todo) {
		return Utils.extend({}, todo, {completed: checked});
	});

	this.inform();
	return this.todos;
};

TodoModel.prototype.toggle = function (todoToToggle) {
	this.todos = this.todos.map(function (todo) {
		return todo !== todoToToggle ?
			todo :
			Utils.extend({}, todo, {completed: !todo.completed});
	});

	this.inform();

	return this.todos;
};

TodoModel.prototype.save = function (todoToSave, text) {
	this.todos = this.todos.map(function (todo) {
		return todo !== todoToSave ? todo : Utils.extend({}, todo, {title: text});
	});

	this.inform();
	return this.todos;
};

TodoModel.prototype.clearCompleted = function () {
	this.todos = this.todos.filter(function (todo) {
		return !todo.completed;
	});

	this.inform();
	return this.todos;
};

export default TodoModel;
