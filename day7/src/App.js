// @flow
import type {State} from './types/State';

function renderTodoItem(item) {
  let content = item.isDone ? `<s>${item.content}</s>` : item.content;
  return `<li onClick="emitEvent('toggleDone', ${item.id})">${content}</li>`;
}

function renderInputText() {
  return `<input type="text" onInput="emitEvent('changeCurrentText', this.value)" />`;
}
function renderSaveButton() {
  return `<button onClick="emitEvent('createNewItem')">Save</button>`;
}

function renderApp(state: State) {
  return `<ul>
    ${state.todoItems.map((item) => renderTodoItem(item)).join('')}
  </ul>${renderInputText()}${renderSaveButton()}`;
}

export {renderApp};
