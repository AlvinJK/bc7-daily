// @flow

import {renderTodoItem} from '../App';

it('should render item todo', () => {
  let ToDoItem = {
    id: 1,
    content: 'Create an app',
    isDone: false,
  };
  let DoneItem = {
    id: 2,
    content: 'Watch tutorial',
    isDone: true,
  };
  expect(renderTodoItem(ToDoItem)).toEqual(
    `<li onClick="emitEvent('toggleDone', 1)">Create an app</li>`,
  );
  expect(renderTodoItem(DoneItem)).toEqual(
    `<li onClick="emitEvent('toggleDone', 2)"><s>Watch tutorial</s></li>`,
  );
});
