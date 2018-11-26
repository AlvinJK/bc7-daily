// @flow
import React from 'react';
import {render} from 'react-dom';
import App from './App';

let container = document.createElement('div');
container.setAttribute('style', 'width: 100%; height: 100%;');
if (document.body) {
  document.body.appendChild(container);
}

render(<App />, container);
