/*
 * Task: compare two values, shallow comparing content in arrays
 */

function isArrayEqual(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  return false;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

console.log(isArrayEqual(arr1, arr2));

let arr3 = [1, 2, 3];
console.log(isArrayEqual(arr1, arr3));

let arr4 = [1, 2, 3, '4'];
console.log(isArrayEqual(arr1, arr4));
