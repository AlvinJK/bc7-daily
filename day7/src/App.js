// @flow
import type {State} from './types/State';

function renderTodoItem(item) {
  let content = item.isDone ? `<s>${item.content}</s>` : item.content;
  return `<li onClick="emitEvent('toggleDone', ${item.id})">${content}</li>`;
}

function renderApp(state: State) {
  return `<ul>
    ${state.todoItems.map((item) => renderTodoItem(item)).join('')}
  </ul>`;
}

export {renderApp};
