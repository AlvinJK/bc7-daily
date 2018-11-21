// @flow
import React from 'react';

import type {Contact} from './types/Contact';

type Props = {
  contact: Contact,
  isSelected: boolean,
  onChangeSelected: (number) => void,
};
function ContactListItem(props: Props) {
  let {contact, isSelected, onChangeSelected} = props;
  let clsName = isSelected ? 'contact-item selected' : 'contact-item';
  return (
    <li onClick={() => onChangeSelected(contact.id)} className={clsName}>
      {contact.name}
    </li>
  );
}

export default ContactListItem;
