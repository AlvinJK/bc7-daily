function arrayFrom(collection: mixed): Array<mixed> {
  let results = [];
  for (let item of collection) {
    results.push(item);
  }
  return results;
}
let object1 = {name: 'alvin', dob: '1991'};
console.log(arrayFrom(Object.keys(object1)));

let array = [1, 2, 3, 4, 5, 6];
let array2 = [...array, 7, 8];
let array3 = [0, ...array];
let array4 = [0, ...array, 7, 8, 9];
console.log(array4);

let stuff = new Set();
stuff.add(2);
stuff.add(5);
stuff.add(7);

console.log(...stuff);
console.log(3, 5, 7);
