// @flow
import toStringArray from './toStringArray';
import toArrayOf from './toArrayOf';
import validateJSON from './validateJSON';

let arr = [1, 2, 3, '4', '5', '6', '7', ['8.1', '8.2', '8.3', undefined], 9, 0];
console.log(toStringArray(arr));

let arr2 = [1, 2, true, false];
console.log(toArrayOf(arr2, makeString));

let data = '{"name": "alvin", "age": 28}';
console.log(validateJSON(data));

function makeString(input: mixed) {
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
}
