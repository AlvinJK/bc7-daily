// @flow
import eventHandlers from '../eventHandlers';

it('should get return changed status on toggle', () => {
  let oldState = {
    idCounter: 3,
    inputText: '',
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: false},
    ],
  };
  let eventHandler = eventHandlers.toggleDone;
  let state1 = eventHandler(oldState, 2);
  expect(state1).toEqual({
    idCounter: 3,
    inputText: '',
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: true},
    ],
  });
  let state2 = eventHandler(state1, 2);
  expect(state2).toEqual({
    idCounter: 3,
    inputText: '',
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: false},
    ],
  });
  let state3 = eventHandler(state2, 3);
  expect(state3).toEqual({
    idCounter: 3,
    inputText: '',
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: false},
    ],
  });
});

it('should get update inputText state on every text changes', () => {
  let oldState = {
    idCounter: 3,
    inputText: '',
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: false},
    ],
  };
  let eventHandler = eventHandlers.changeCurrentText;
  let inputTextValue = 'Write Some Test';
  let state1 = eventHandler(oldState, inputTextValue);
  expect(state1).toEqual({
    idCounter: 3,
    inputText: inputTextValue,
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: false},
    ],
  });
  inputTextValue = 'Oops, that should be done before creating app';
  let state2 = eventHandler(state1, inputTextValue);
  expect(state2).toEqual({
    idCounter: 3,
    inputText: inputTextValue,
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: false},
    ],
  });
  inputTextValue = 'Never mind then';
  let state3 = eventHandler(state2, inputTextValue);
  expect(state3).toEqual({
    idCounter: 3,
    inputText: inputTextValue,
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: false},
    ],
  });
  let state4 = eventHandler(state3, true);
  expect(state4).toEqual({
    idCounter: 3,
    inputText: inputTextValue,
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: false},
    ],
  });
});

it('should get update inputText state on every text changes', () => {
  let oldState = {
    idCounter: 3,
    inputText: 'Write some tests',
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: false},
    ],
  };
  let eventHandler = eventHandlers.createNewItem;
  let state1 = eventHandler(oldState);
  expect(state1).toEqual({
    idCounter: 4,
    inputText: '',
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: false},
      {id: 3, content: 'Write some tests', isDone: false},
    ],
  });
  state1.inputText = 'We are mutating this directly';
  let state2 = eventHandler(state1);
  expect(state2).toEqual({
    idCounter: 5,
    inputText: '',
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: false},
      {id: 3, content: 'Write some tests', isDone: false},
      {id: 4, content: 'We are mutating this directly', isDone: false},
    ],
  });
  let state3 = eventHandler(state2);
  expect(state3).toEqual({
    idCounter: 5,
    inputText: '',
    todoItems: [
      {id: 1, content: 'Watch Bootcamp Video Day 7', isDone: true},
      {id: 2, content: 'Create first JS HTML', isDone: false},
      {id: 3, content: 'Write some tests', isDone: false},
      {id: 4, content: 'We are mutating this directly', isDone: false},
    ],
  });
});
