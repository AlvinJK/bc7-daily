// @flow
type TodoItem = {
  id: string,
  content: string,
  isDone: boolean,
};
type State = {
  todoItems: Array<TodoItem>,
  searchText: string,
  inputText: string,
  selectedIndex: number,
};

export type {State};
