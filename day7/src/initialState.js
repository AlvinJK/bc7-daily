// @flow

import type {State} from './types/State';
let initialState: State = {
  inputText: '',
  idCounter: 4,
  todoItems: [
    {id: 1, content: 'Watch Day 7 video a', isDone: false},
    {id: 2, content: 'Watch Day 7 video b', isDone: false},
    {id: 3, content: 'Watch Day 7 video c', isDone: false},
  ],
};

export default initialState;
