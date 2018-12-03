// @flow
import React, {Component} from 'react';
import Item from './Item';
import type {TodoItem} from './types/TodoItem';

type Props = {
  itemList: Array<TodoItem>,
  toggleDone: (id: string) => void,
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
};

export default function TodoList(props: Props) {
  let {itemList, toggleDone} = props;
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#FF4500',
        color: '#FFF',
      }}
    >
      <h3 style={{textAlign: 'center'}}>To-Do List</h3>
      <ul style={listStyle}>
        {itemList.map((item) => {
          return <Item key={item.id} item={item} toggleDone={toggleDone} />;
        })}
      </ul>
    </div>
  );
}
