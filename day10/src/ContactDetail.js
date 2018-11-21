// @flow
import React from 'react';

import type {Contact} from './types/Contact';

type Props = {
  contact: Contact | null,
};
function ContactDetail(props: Props) {
  let name = '';
  let phoneNumber = '';
  let email = '';
  let {contact} = props;
  if (contact != null) {
    name = contact.name;
    phoneNumber = contact.phoneNumber;
    email = contact.email;
  }
  return (
    <div className="contact-detail">
      <h2>Detail</h2>
      <dl>
        <dt>Name</dt>
        <dd>{name}</dd>
      </dl>
      <dl>
        <dt>Telephone</dt>
        <dd>{phoneNumber}</dd>
      </dl>
      <dl>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </div>
  );
}
export default ContactDetail;
