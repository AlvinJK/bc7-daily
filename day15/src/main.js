// @flow
import React from 'react';
import {render} from 'react-dom';

import App from './App';

let container = document.createElement('div');
if (document.body) {
  document.body.appendChild(container);
}

render(<App />, container);
