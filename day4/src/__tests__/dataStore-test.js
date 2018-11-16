// @flow
import DataStore from '../dataStore.js';

it('should double all numbers and invert all boolean', () => {
  let d = new DataStore();

  d.set('apples', 570);
  d.set('bananas', 9865);
  d.set('sellApples', true);
  d.set('sellOranges', false);
  d.set('isMonopoly', false);

  let result = d.forEach((key, value) => {
    if (typeof value === 'boolean') {
      return !value;
    }
    if (typeof value === 'number') {
      return value * 2;
    }
    return value;
  });

  expect(result).toEqual({
    apples: 1140,
    bananas: 19730,
    sellApples: false,
    sellOranges: true,
    isMonopoly: true,
  });
});

/*
let d = new DataStore();

d.set('apples', 570);
d.set('bananas', 9865);

d.forEach((key, value) => {
  console.log(key, ':', value);
});

d.set('oranges', 1000);

d.forEach((key, value) => {
  console.log(key, ':', value);
});
*/
