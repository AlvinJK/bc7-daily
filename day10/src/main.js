// @flow
import React from 'react';
import App from './App';
import {render} from 'react-dom';

let container = document.createElement('div');
if (document.body) {
  document.body.appendChild(container);
}

render(<App />, container);
