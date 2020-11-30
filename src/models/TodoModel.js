import { makeObservable, observable, action } from "mobx";

export default class TodoModel {
  id;
  title = "";
  finished = false;
  store;
  constructor(store, title, id, completed) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
    this.store = store;
    this.id = id;
  }

  toggle() {
    this.finished = !this.finished;
  }
  destroy() {
    console.log(this.store);
    this.store.todos.remove(this);
  }
  setTitle(title) {
    this.title = title;
  }

  toJS() {
    return {
      id: this.id,
      title: this.title,
      finished: this.finished,
    };
  }

  static fromJS(store, object) {
    return new TodoModel(store, object.id, object.title, object.completed);
  }
}
