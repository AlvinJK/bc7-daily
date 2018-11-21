// @flow
import React, {Component} from 'react';

import type {State} from './types/State';

import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

type Props = {};

class App extends Component<Props, State> {
  componentDidMount() {
    document.addEventListener('keyup', this._onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this._onKeyUp);
  }

  state = {
    contactList: [
      {
        id: 1,
        name: 'Steve Rogers',
        phoneNumber: '71737876',
        email: 'Capt.rogers@shield.id',
      },
      {
        id: 2,
        name: 'Tony Stark',
        phoneNumber: '71873847',
        email: 'iron.man@stark.tech',
      },
      {
        id: 3,
        name: 'Thor Odinson',
        phoneNumber: "Don't have a phone",
        email: 'godofthunder@avengers.earth',
      },
      {
        id: 4,
        name: 'Bruce Banner',
        phoneNumber: '08837468',
        email: 'seven_phd@shield.id',
      },
      {
        id: 5,
        name: 'Natasha Romanoff',
        phoneNumber: '8597847',
        email: 'b.widow@shield.id',
      },
      {
        id: 6,
        name: 'Clint Barton',
        phoneNumber: '4875878',
        email: 'hawkeye@shield.id',
      },
    ],
    selectedIndex: 0,
    searchText: '',
  };
  render() {
    let {contactList, selectedIndex, searchText} = this.state;
    let filteredContacts = contactList.filter((item) => {
      if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    let selectedContact = null;
    if (filteredContacts != null) {
      selectedContact = filteredContacts[selectedIndex];
    }
    return (
      <div className="container">
        <ContactList
          contactList={filteredContacts}
          selectedIndex={selectedIndex}
          searchText={searchText}
          onChangeSelected={this._changeSelectedById}
          onSearch={this._onSearch}
        />
        <ContactDetail contact={selectedContact} />
      </div>
    );
  }

  _onSearch = (searchText: string) => {
    this.setState({selectedIndex: 0, searchText: searchText});
  };

  _changeSelectedById = (id: number) => {
    let {contactList} = this.state;
    for (let [index, contact] of contactList.entries()) {
      if (contact.id === id) {
        this.setState({selectedIndex: index});
      }
    }
  };

  _onKeyUp = (event: KeyboardEvent) => {
    let {selectedIndex, contactList, searchText} = this.state;
    let filteredContacts = contactList.filter((item) => {
      if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    if (filteredContacts.length > 0) {
      let maxIndex = filteredContacts.length - 1;
      let key = event.key;
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
    }
  };
}

export default App;
