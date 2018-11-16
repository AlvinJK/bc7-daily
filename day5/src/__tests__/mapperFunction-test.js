// @flow
import {mapArrayToNumber, mapArray} from '../mapperFunction';

it('Should return the string length of every item on array of string', () => {
  let a = ['Rei', 'Gema', 'Listi'];
  let b = mapArrayToNumber(a, (word) => word.length);
  expect(b).toEqual([3, 4, 5]);
});

it('Should return the char code for the first letter of every item on array of string', () => {
  let a = ['Rei', 'Gema', 'Listi'];
  let b = mapArrayToNumber(a, (word) => word.charCodeAt(0));
  expect(b).toEqual([82, 71, 76]);
});

it('Should return the triple of each value on array of number', () => {
  let a = [5, 10, 20];
  let b = mapArray(a, (num) => num * 3);
  expect(b).toEqual([15, 30, 60]);
});
