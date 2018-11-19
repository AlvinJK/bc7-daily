// @flow
import {render} from './main';
type TodoItem = {
  id: string,
  content: string,
  isDone: boolean,
};
type State = {
  inputText: string,
  todoItems: Array<TodoItem>,
};

export let state = {
  inputText: '',
  todoItems: [
    {id: '100', content: 'Buy Apples', isDone: false},
    {id: '120', content: 'Wash Car', isDone: false},
  ],
};

export function setState(newState: State) {
  state = newState;
  render();
}

export function getState(): State {
  return state;
}

export type {State};
