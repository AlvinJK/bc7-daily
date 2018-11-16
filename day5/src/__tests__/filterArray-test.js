// @flow

import {filterArray} from '../filterArray';

it('should filter numbers according to the function', () => {
  let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  let greaterThanFifty = (num: number) => {
    if (num > 50) {
      return num;
    }
  };
  let lessThanFifty = (num: number) => {
    if (num < 50) {
      return num;
    }
  };
  expect(filterArray(a, greaterThanFifty)).toEqual([60, 70, 80, 90, 100]);
  expect(filterArray(a, lessThanFifty)).toEqual([10, 20, 30, 40]);
});

it('should filter strings according to the functions', () => {
  let a = ['Grab', 'Gojek', 'Traveloka', 'Tokopedia', 'Bukalapak'];

  let findStringLongerThanFour = (word: string) => {
    if (word.length > 4) {
      return word;
    }
  };
  let findStringShorterThanFour = (word: string) => {
    if (word.length < 4) {
      return word;
    }
  };
  expect(filterArray(a, findStringLongerThanFour)).toEqual([
    'Gojek',
    'Traveloka',
    'Tokopedia',
    'Bukalapak',
  ]);
  expect(filterArray(a, findStringShorterThanFour)).toEqual([]);
});
