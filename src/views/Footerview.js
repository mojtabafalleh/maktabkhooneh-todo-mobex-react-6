import React, { Component } from "react";
import { observer } from "mobx-react-lite";
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from "../constants";

const Footerview = observer(({ todoList, viewStore }) => {
  if (!todoList.activeTodoCount && !todoList.completedCount) return null;

  const activeTodoWord = pluralize(todoList.activeTodoCount, "item");

  const renderFilterLink = (filterName, url, caption) => {
    return (
      <li>
        <a
          href={"#/" + url}
          onClick={() => (viewStore.todoFilter = filterName)}
          className={filterName === viewStore.todoFilter ? "selected" : ""}
        >
          {caption}
        </a>{" "}
      </li>
    );
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoList.activeTodoCount}</strong> {activeTodoWord} left
      </span>
      <ul className="filters">
        {renderFilterLink(ALL_TODOS, "", "All")}
        {renderFilterLink(ACTIVE_TODOS, "active", "Active")}
        {renderFilterLink(COMPLETED_TODOS, "completed", "Completed")}
      </ul>
      <button
        className="clear-completed"
        onClick={() => todoList.clearCompleted()}
      >
        Clear completed
      </button>
    </footer>
  );
});

function pluralize(count, word) {
  return count === 1 ? word : word + "s";
}

export default Footerview;
