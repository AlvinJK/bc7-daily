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
};

export default eventHandlers;
