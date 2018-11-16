function compareObjects(obj1, obj2) {
  if (typeof obj1 !== typeof obj2 || typeof obj1 !== 'object') {
    return false;
  }
  if (obj1 == null && obj2 == null) {
    return true;
  }
  if (obj1 == null || obj2 == null) {
    return false;
  }
  let propsObj1 = Object.keys(obj1);
  let propsObj2 = Object.keys(obj2);

  if (propsObj1.length !== propsObj2.length) {
    return false;
  }

  for (let prop of propsObj1) {
    if (obj2.hasOwnProperty(prop)) {
      if (obj1[prop] !== obj2[prop]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
let personOne = {
  name: 'Hendry',
  friendCount: 100,
};

let personTwo = {
  name: 'Simon',
  friendCount: 200,
};

let personThree = {
  name: 'Hendry',
  friendCount: 100,
};

let personFour = {
  friendCount: 200,
  name: 'Simon',
};

let personEmpty = {};
let actualNull = null;

console.log(compareObjects(personOne, personTwo));
console.log(compareObjects(personOne, personThree));
console.log(compareObjects(personTwo, personFour));
console.log(compareObjects(personEmpty, actualNull));
console.log(compareObjects(null, actualNull));
