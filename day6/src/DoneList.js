// @flow
import React from 'react';
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

export default function DoneList(props: Props) {
  let {itemList, toggleDone} = props;
  return (
    <div
      style={{
        flexGrow: 1,
        flexBasis: 0,
        backgroundColor: '#8FBC8F',
        color: '#FFF',
      }}
    >
      <h3 style={{textAlign: 'center'}}>Done List</h3>
      <ul style={listStyle}>
        {itemList.map((item) => {
          return <Item key={item.id} item={item} toggleDone={toggleDone} />;
        })}
      </ul>
    </div>
  );
}
