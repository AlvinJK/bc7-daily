// @flow
import React from 'react';
import type {TodoItem} from './types/TodoItem';

type Props = {
  item: TodoItem,
  toggleDone: (id: string) => void,
};
export default function Item(props: Props) {
  let {item, toggleDone} = props;
  let content = item.isDone ? (
    <div>
      <input type="checkbox" checked={true} readOnly={true} />
      {item.content}
    </div>
  ) : (
    <div>
      <input type="checkbox" />
      {item.content}
    </div>
  );
  return <li onClick={() => toggleDone(item.id)}>{content}</li>;
}
