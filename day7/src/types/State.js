// @flow

type ToDoItem = {
  id: number,
  content: string,
  isDone: boolean,
};

export type State = {
  todoItems: Array<ToDoItem>,
};
