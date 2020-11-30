import { ALL_TODOS } from "../constants";
import { makeObservable, observable } from "mobx";

export default class ViewStore {
  todoBeingEdited = null;
  todoFilter = ALL_TODOS;
  constructor() {
    makeObservable(this, {
      todoBeingEdited: observable,
      todoFilter: observable,
    });
  }
}
