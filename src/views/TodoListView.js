import React, { Component } from "react";
import TodoView from "./TodoView";
import { observer } from "mobx-react-lite";
import {  ACTIVE_TODOS, COMPLETED_TODOS } from "../constants";

const TodoListView = observer(({ todoList, viewStore }) => {
  console.log(viewStore.todoFilter);
  switch (viewStore.todoFilter) {
    case ACTIVE_TODOS:
      return (
        <div>
          <ul>
            {todoList.todos.map((todo) =>
              !todo.finished ? <TodoView todo={todo} key={todo.id} /> : false
            )}
          </ul>
        </div>
      );
      break;

    case COMPLETED_TODOS:
      return (
        <div>
          <ul>
            {todoList.todos.map((todo) =>
              todo.finished ? <TodoView todo={todo} key={todo.id} /> : false
            )}
          </ul>
        </div>
      );
      break;

    default:
      return (
        <div>
          <ul>
            {todoList.todos.map((todo) => (
              <TodoView todo={todo} key={todo.id} />
            ))}
          </ul>
        </div>
      );
      break;
  }
});

export default TodoListView;
