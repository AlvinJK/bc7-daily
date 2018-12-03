// @flow
import React, {Component} from 'react';
import type {TodoItem} from './types/TodoItem';

import TodoList from './TodoList';
import DoneList from './DoneList';
type Props = {};
type State = {
  todoItems: Array<TodoItem>,
  inputText: string,
};

class App extends Component<Props, State> {
  state = {
    todoItems: [
      {id: '100', content: 'Learn Webpack', isDone: false},
      {id: '200', content: 'Learn Flexbox', isDone: false},
      {id: '300', content: 'Practicxe Flexbox Froggy', isDone: false},
    ],
    inputText: '',
  };

  _onToggleDone = (id: string) => {
    let newTodoItems = this.state.todoItems.map((item) =>
      item.id === id ? {...item, isDone: !item.isDone} : item,
    );
    this.setState({todoItems: newTodoItems});
  };

  _onInputChange = (newText: string) => {
    this.setState({inputText: newText});
  };

  _addNewItem = () => {
    let newItem = this.state.inputText;
    if (newItem.trim().length > 0) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          {
            id: Math.random().toString(),
            content: newItem,
            isDone: false,
          },
        ],
        inputText: '',
      });
    }
  };

  render() {
    let todoList = this.state.todoItems.filter((item) => {
      return !item.isDone;
    });
    let doneList = this.state.todoItems.filter((item) => {
      return item.isDone;
    });
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        }}
      >
        <header style={{flex: 1}}>
          <h1
            style={{
              margin: '0 auto 10px',
              position: 'relative',
              textAlign: 'center',
            }}
          >
            TO DO LIST
          </h1>
        </header>
        <div
          style={{
            flex: 4,
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <TodoList itemList={todoList} toggleDone={this._onToggleDone} />
          <DoneList itemList={doneList} toggleDone={this._onToggleDone} />
        </div>
        <div
          style={{
            flex: '1',
            textAlign: 'center',
            padding: '20px 10px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{flexGrow: '1', flexBasis: '0'}}>New Todo :</span>
          <input
            style={{flexGrow: '5', flexBasis: '0', margin: '0 10px'}}
            type="text"
            value={this.state.inputText}
            onChange={(event) => this._onInputChange(event.target.value)}
          />
          <button
            style={{flexGrow: '1', flexBasis: '0', margin: '0 10px'}}
            onClick={(event) => this._addNewItem()}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default App;
