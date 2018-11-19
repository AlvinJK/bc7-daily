// @flow
import React, {Component} from 'react';

type Props = {
  changeSearch: (searchText: string) => void,
  searchText: string,
};

class NewItemForm extends Component<Props> {
  render() {
    let onChange = (event) => {
      this.props.changeSearch(event.target.value);
    };
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.searchText}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default NewItemForm;
