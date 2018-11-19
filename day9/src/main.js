// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import {render} from 'react-dom';

let container = document.createElement('div');
if (document.body) {
  document.body.appendChild(container);
}

ReactDOM.render(<App />, container);
