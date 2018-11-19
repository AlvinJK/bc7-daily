// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {getState} from './state';

let container = document.createElement('div');
if (document.body) {
  document.body.appendChild(container);
}
export function render() {
  let state = getState();
  ReactDOM.render(<App state={state} />, container);
}

render();
