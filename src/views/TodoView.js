import { observer } from "mobx-react-lite";
const TodoView = observer(({ todo }) => (
  <ul class="todo-list">
    <li className={todo.finished ? "completed" : ""}>
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          checked={todo.finished}
          onClick={() => todo.toggle()}
        />
        <label>{todo.title}</label>
        <button class="destroy" onClick={() => todo.destroy()}></button>
      </div>
      <input class="edit" value="Create a TodoMVC template" />
    </li>
  </ul>
));

export default TodoView;
