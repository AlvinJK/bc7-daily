// @flow
import React, {Component} from 'react';
import type {State} from './types/State';

import TodoItem from './TodoItem';
import NewItemForm from './NewItemForm';
import SearchBox from './SearchBox';

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
    let {todoItems} = this.state;
    //return <p>Hello {this.state.name}</p>;

    return (
      <div>
        <SearchBox
          searchText={this.state.searchText}
          changeSearch={this._onSearchItem}
        />
        <ul>
          {todoItems.map((item) => {
            if (
              item.content
                .toLowerCase()
                .includes(this.state.searchText.toLowerCase())
              /*
              item.content
                .toLowerCase()
                .indexOf(this.state.searchText.toLowerCase()) !== -1 ||
              this.state.searchText === ''
              */
            ) {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  toggleDone={this._onToggleDone}
                />
              );
            }
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
  _onSearchItem = (searchQuery: string) => {
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
