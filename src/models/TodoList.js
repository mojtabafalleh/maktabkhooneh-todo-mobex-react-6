import { makeObservable, observable, computed, action } from "mobx";
import TodoModel from "./TodoModel";

export default class TodoList {
  todos = [];
  lastId = 0;
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      completedCount: computed,
      activeTodoCount: computed,
      addTodo: action,
      toggleAll: action,
      clearCompleted: action,
    });
    this.todos = todos;
  }
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, this.lastId++, false));
  }
  toggleAll() {
    this.todos.forEach((todo) => (todo.finished = true));
  }
  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.finished);
  }
  clearActive() {
    this.todos = this.todos.filter((todo) => todo.finished);
  }
  get activeTodoCount() {
    return this.todos.reduce((sum, todo) => sum + (todo.finished ? 0 : 1), 0);
  }

  get completedCount() {
    return this.todos.length - this.activeTodoCount;
  }
  toJS() {
    return this.todos.map((todo) => todo.toJS());
  }

  static fromJS(array) {
    const todolist = new TodoList();
    todolist.todos = array.map((item) => TodoModel.fromJS(todolist, item));
    return todolist;
  }
}
