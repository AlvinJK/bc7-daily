// @flow
import {renderApp} from './App';
import initialState from './initialState';
import eventHandlers from './eventHandlers';

let state = initialState;

global.emitEvent = (eventName: string, eventData?: mixed) => {
  let eventHandler = eventHandlers[eventName];
  if (eventHandler) {
    state = eventHandler(state, eventData);
  }
  if (eventName !== 'changeCurrentText') {
    render();
  }
};

function render() {
  let html = renderApp(state);
  if (document.body) {
    document.body.innerHTML = html;
  }
}

render();
