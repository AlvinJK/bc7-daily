// @flow
import React, {Component} from 'react';
import type {State} from './types/State';

import TodoItem from './TodoItem';
import NewItemForm from './NewItemForm';

type Props = {};
class App extends Component<Props, State> {
  state = {
    todoItems: [
      {id: '100', content: 'Buy Apples', isDone: false},
      {id: '120', content: 'Wash Car', isDone: false},
    ],
    searchText: '',
    inputText: '',
  };
  render() {
    let {todoItems, searchText} = this.state;

    let lcSearchText = searchText.toString().toLowerCase();
    let filteredTodoItems = todoItems.filter((item) => {
      return item.content
        .toString()
        .toLowerCase()
        .includes(lcSearchText);
    });
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={this._onChangeSearch}
        />
        <ul>
          {filteredTodoItems.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                toggleDone={this._onToggleDone}
              />
            );
          })}
        </ul>
        <button onClick={() => this.setState({inputText: ''})}>
          Clear Input
        </button>
        <NewItemForm
          inputText={this.state.inputText}
          changeText={(newText: string) => {
            this.setState({inputText: newText});
          }}
          addItem={this._onAddItem}
        />
      </div>
    );
  }
  _onChangeSearch = (event: any) => {
    let searchQuery = event.target.value;
    this.setState({
      searchText: searchQuery,
    });
  };
  _onAddItem = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {
          id: Math.random().toString(),
          content: this.state.inputText,
          isDone: false,
        },
      ],
      inputText: '',
    });
  };
  _onToggleDone = (id: string) => {
    let newTodoItems = this.state.todoItems.map((item) =>
      item.id === id ? {...item, isDone: !item.isDone} : item,
    );
    this.setState({
      todoItems: newTodoItems,
    });
  };
}
export default App;
