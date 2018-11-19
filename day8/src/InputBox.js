// @flow
import React from 'react';

type Props = {
  changeText: (string) => void,
  saveText: () => void,
  textValue: string,
};

export default function InputBox(props: Props) {
  let {changeText, saveText, textValue} = props;
  return (
    <div>
      <input
        type="text"
        onChange={(evt) => changeText(evt.target.value)}
        value={textValue}
      />
      <button onClick={() => saveText()}>Save</button>
    </div>
  );
}
