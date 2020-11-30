import React, { Component } from "react";
import TodoList from "./models/TodoList";
import TodoListView from "./views/TodoListView";
import TodoEntry from "./views/TOdoEntry";
import Footerview from "./views/Footerview";
import ViewStore from "./models/ViewStore";

const ALL_TODOS = "all";
const ACTIVE_TODOS = "active";
const COMPLETED_TODOS = "completed";
export default class App extends Component {
  render() {
    const store = new TodoList([]);
    const viewStore = new ViewStore();

    return (
      <section class="todoapp">
        <header class="header">
          <h1>todos </h1>
          <TodoEntry todoList={store} />
        </header>
        <section class="main">
          <input id="toggle-all" class="toggle-all" type="checkbox" />
          <label for="toggle-all">Mark all as complete</label>
          <TodoListView todoList={store} viewStore={viewStore} />
        </section>
        <Footerview todoList={store} viewStore={viewStore} />
      </section>
	);
  }
}
