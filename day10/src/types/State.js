// @flow
import type {Contact} from './Contact';

type State = {
  contactList: Array<Contact>,
  selectedIndex: number,
  searchText: string,
};

export type {State};
