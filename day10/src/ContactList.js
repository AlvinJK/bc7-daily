// @flow
import React, {Component} from 'react';

import type {Contact} from './types/Contact';

import ContactListItem from './ContactListItem';
type Props = {
  contactList: Array<Contact>,
  selectedIndex: number,
  searchText: string,
  onChangeSelected: (number) => void,
  onSearch: (string) => void,
};
class ContactList extends Component<Props> {
  render() {
    let {contactList, selectedIndex, onChangeSelected, searchText} = this.props;

    return (
      <div className="contact-list-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            onChange={this._onChangeSearchText}
            value={searchText}
          />
        </div>
        <ul>
          {contactList.map((item, index) => {
            return (
              <ContactListItem
                key={item.id}
                contact={item}
                isSelected={index === selectedIndex}
                onChangeSelected={onChangeSelected}
              />
            );
          })}
        </ul>
      </div>
    );
  }
  _onChangeSearchText = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    let {onSearch} = this.props;
    let newSearchText = event.currentTarget.value;
    onSearch(newSearchText);
  };
}

export default ContactList;
