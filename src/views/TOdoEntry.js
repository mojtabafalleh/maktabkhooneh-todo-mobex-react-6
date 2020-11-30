import React from "react";
import ReactDOM from "react-dom";


const ENTER_KEY = 13;

export default class TodoEntry extends React.Component {
  render() {
    return (
      <input
        ref="newField"
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={this.handleNewTodoKeyDown}
        autoFocus={true}
      />
    );
  }

  handleNewTodoKeyDown = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = ReactDOM.findDOMNode(this.refs.newField).value.trim();

    if (val) {
      this.props.todoList.addTodo(val);
      ReactDOM.findDOMNode(this.refs.newField).value = "";
    }
  };
}
