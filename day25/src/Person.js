// @flow
import {object, string, number} from 'validated/schema';
import {validate} from 'validated/object';
let personSchema = object(
  {
    name: string,
    age: number,
  },
  {
    age: 0,
  },
);
export default class Person {
  name: string = '';
  age: number = 0;
  validateData = (data: mixed) => {
    let result;
    try {
      result = validate(personSchema, data);
    } catch (error) {
      console.log('error');
    }
    return result;
  };
}
