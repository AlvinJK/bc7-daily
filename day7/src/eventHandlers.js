// @flow
import type {State} from './types/State';

type StateFunction = (state: State, data: mixed) => State;
type EventHandlerObject = {[eventName: string]: StateFunction};
let eventHandlers: EventHandlerObject = {
  toggleDone: (oldState, id) => {
    //console.log(oldState, id);
    let newTodoItems = oldState.todoItems.map((item) => {
      if (item.id === id) {
        return {...item, isDone: !item.isDone};
      } else {
        return item;
      }
    });
    //console.log(newTodoItems);
    return {...oldState, todoItems: newTodoItems};
  },
  changeCurrentText: (oldState, newText) => {
    //console.log('changeCurrentText fired');
    if (typeof newText === 'string') {
      return {...oldState, inputText: newText};
    } else {
      return oldState;
    }
  },
  createNewItem: (oldState) => {
    //console.log('createNewItem fired');
    if (oldState.inputText !== '') {
      let newItem = {
        id: oldState.idCounter,
        content: oldState.inputText,
        isDone: false,
      };
      return {...oldState, todoItems: [...oldState.todoItems, newItem]};
    }
    return oldState;
  },
};

export default eventHandlers;
