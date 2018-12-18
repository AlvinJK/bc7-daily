// @flow
import toArrayOf from '../toArrayOf';

let arrayToTest = [1, 2, true, false, '90', '0'];
it('should convert to array of strings', () => {
  let arrString = toArrayOf(arrayToTest, makeString);
  expect(arrString).toEqual(['1', '2', 'true', 'false', '90', '0']);
});
it('should convert to array of numbers', () => {
  let arrString = toArrayOf(arrayToTest, makeNumber);
  expect(arrString).toEqual([1, 2, 1, 0, 1, 1]);
});
it('should convert to array of booleans', () => {
  let arrString = toArrayOf(arrayToTest, makeBoolean);
  expect(arrString).toEqual([true, true, true, false, true, true]);
});
function makeString(input: mixed): string {
  if (typeof input === 'string') {
    return input;
  }
  if (input != null) {
    if (
      typeof input === 'object' ||
      typeof input === 'boolean' ||
      typeof input === 'number'
    ) {
      return input.toString();
    }
  }
  return '';
}
function makeNumber(input: mixed): number {
  if (typeof input === 'number') {
    return input;
  }
  if (typeof input === 'boolean' || typeof input === 'string') {
    if (input) {
      return 1;
    } else {
      return 0;
    }
  }
  return 0;
}
function makeBoolean(input: mixed): boolean {
  if (typeof input === 'boolean') {
    return input;
  }
  if (typeof input === 'number' || typeof input === 'string') {
    if (input) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}
