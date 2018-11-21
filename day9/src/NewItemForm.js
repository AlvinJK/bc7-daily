// @flow
import React, {Component} from 'react';

type Props = {
  addItem: () => void,
  changeText: (inputText: string) => void,
  inputText: string,
};

function NewItemForm(props: Props) {
  let {inputText, changeText, addItem} = props;
  let onChange = (event) => {
    changeText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={addItem}>Save</button>
    </div>
  );
}

export default NewItemForm;
