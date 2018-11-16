// @flow

type ToDoItem = {
  id: number,
  content: string,
  isDone: boolean,
};

export type State = {
  inputText: string,
  idCounter: number,
  todoItems: Array<ToDoItem>,
};
