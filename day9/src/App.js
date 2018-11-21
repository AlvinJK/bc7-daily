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
      {id: '140', content: 'Do Laundry', isDone: false},
      {id: '160', content: 'Teach Class', isDone: false},
    ],
    searchText: '',
    inputText: '',
    selectedIndex: 0,
  };

  componentDidMount() {
    // Add an event listener to
    document.addEventListener('keyup', this._onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this._onKeyUp);
  }

  render() {
    let {todoItems, searchText, selectedIndex} = this.state;

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
        <ul style={{listStyle: 'none', padding: 0}}>
          {filteredTodoItems.map((item, index) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                isSelected={index === selectedIndex}
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

  _onKeyUp = (event: KeyboardEvent) => {
    let {selectedIndex, todoItems} = this.state;
    let maxIndex = todoItems.length - 1;
    let key = event.key;
    console.log(key);
    if (key === 'ArrowUp' && document.activeElement === document.body) {
      this.setState({
        selectedIndex: selectedIndex > 0 ? selectedIndex - 1 : selectedIndex,
      });
    }
    if (key === 'ArrowDown' && document.activeElement === document.body) {
      this.setState({
        selectedIndex:
          selectedIndex < maxIndex ? selectedIndex + 1 : selectedIndex,
      });
    }
    if (key === ' ' && document.activeElement === document.body) {
      this._onToggleDone(todoItems[selectedIndex].id);
    }
  };

  _onChangeSearch = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    let input = event.currentTarget;
    this.setState({
      searchText: input.value,
      selectedIndex: 0,
    });
  };
  _onAddItem = () => {
    let {inputText} = this.state;
    if (inputText.trim() !== '') {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          {
            id: Math.random().toString(),
            content: inputText,
            isDone: false,
          },
        ],
        inputText: '',
      });
    }
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
