/*
 * Task: given an array of numbers, return a new array in which each number is doubled
 */

function doubleTrouble(array) {
  let newArr = [];
  for (let num of array) newArr.push(num * 2);
  return newArr;
}
let arr = [1, 2, 3];
let newArr = doubleTrouble(arr);
console.log(newArr);

function tripleNum(number) {
  return number * 3;
}
let nextArr = newArr.map(tripleNum);
console.log(nextArr);

let tripleArr = nextArr.map((x) => x * 3);
console.log(tripleArr);
