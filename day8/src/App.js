// @flow
import React from 'react';
import type {State} from './state';
import {setState} from './state';
import TodoItem from './TodoItem';
import InputBox from './InputBox';
type Props = {
  state: State,
};

function App(props: Props) {
  let {state} = props;
  let {todoItems} = props.state;
  let toggleDone = (id) => {
    let newTodoItems = todoItems.map((item) => {
      if (item.id === id) {
        return {...item, isDone: !item.isDone};
      } else {
        return item;
      }
    });
    setState({
      ...state,
      todoItems: newTodoItems,
    });
  };
  let changeText = (newText) => {
    setState({...state, inputText: newText});
  };
  let saveText = () => {
    let newId = Math.random().toString();
    let newTodoItems = [
      ...state.todoItems,
      {id: newId, content: state.inputText, isDone: false},
    ];
    setState({...state, inputText: '', todoItems: newTodoItems});
  };
  return (
    <div>
      <ul>
        {todoItems.map((item) => (
          <TodoItem key={item.id} item={item} toggleDone={toggleDone} />
        ))}
      </ul>
      <InputBox
        textValue={state.inputText}
        changeText={changeText}
        saveText={saveText}
      />
    </div>
  );
}

export default App;
