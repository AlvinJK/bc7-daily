// @flow
import React, {Component} from 'react';

type Props = {
  addItem: () => void,
  changeText: (inputText: string) => void,
  inputText: string,
};

class NewItemForm extends Component<Props> {
  render() {
    let onChange = (event) => {
      this.props.changeText(event.target.value);
    };
    let onSubmit = () => {
      this.props.addItem();
      this.props.changeText('');
    };
    return (
      <div>
        <input type="text" value={this.props.inputText} onChange={onChange} />
        <button onClick={onSubmit}>Save</button>
      </div>
    );
  }
}

export default NewItemForm;
