// @flow
import React from 'react';
type Props = {
  item: Object,
  toggleDone: (id: string) => void,
};

export default function TodoItem(props: Props) {
  let {toggleDone, item} = props;
  let content = item.isDone ? <s>{item.content}</s> : item.content;
  return <li onClick={() => toggleDone(item.id)}>{content}</li>;
}
