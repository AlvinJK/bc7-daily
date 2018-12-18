// @flow
import toStringArray from '../toStringArray';

it('should convert to array of strings', () => {
  let arrayToTest = [
    1,
    2,
    3,
    '4',
    '5',
    '6',
    '7',
    ['8.1', '8.2', '8.3', undefined],
    9,
    0,
  ];
  let arrString = toStringArray(arrayToTest);
  expect(arrString).toEqual([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8.1,8.2,8.3,',
    '9',
    '0',
  ]);
  let arrayObject = [{}, 1, 2];
  let arrString2 = toStringArray(arrayObject);
  expect(arrString2).toEqual(['[object Object]', '1', '2']);
});
