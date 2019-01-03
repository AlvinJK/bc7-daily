// @flow
import Person from './Person';
let alvin = new Person();
let input = {name: 'alvin'};

let result = alvin.validateData(input);
if (result) {
  console.log(result);
}
