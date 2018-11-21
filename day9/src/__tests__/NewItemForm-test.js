// @flow
import React from 'react';
import {shallow} from 'enzyme';

import NewItemForm from '../NewItemForm';

it('should render a form', () => {
  let changeText = () => {};
  let addItem = () => {};
  let wrapper = shallow(
    <NewItemForm inputText="" addItem={addItem} changeText={changeText} />,
  );
  expect(
    wrapper.matchesElement(
      <div>
        <input type="text" value="" />
        <button onClick={addItem}>Save</button>
      </div>,
    ),
  ).toEqual(true);
});
