function compareArray(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (typeof arr1[i] === 'object') {
        if (arr1[i].constructor === Array) {
          return compareArray(arr1[i], arr2[i]);
        } else {
          return compareObjects(arr1[i], arr2[i]);
        }
      } else {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

function compareObjects(obj1, obj2) {
  if (typeof obj1 !== typeof obj2 || typeof obj1 !== 'object') return false;
  if (obj1 == null && obj2 == null) {
    return true;
  }
  if (obj1 == null || obj2 == null) {
    return false;
  }
  let arrProp1 = Object.keys(obj1);
  let arrProp2 = Object.keys(obj2);
  if (arrProp1.length !== arrProp2.length) {
    return false;
  }
  for (let prop of arrProp1) {
    if (obj2.hasOwnProperty(prop)) {
      if (typeof obj1[prop] === 'object') {
        if (obj1[prop].constructor === Array) {
          return compareArray(obj1[prop], obj2[prop]);
        } else {
          return compareObjects(obj1[prop], obj2[prop]);
        }
      } else {
        if (obj1[prop] !== obj2[prop]) {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return true;
}

function compare(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  if ((a === null || b === null) && a !== b) {
    return false;
  }
  let type = typeof a;
  let result;
  switch (type) {
    case 'object':
      if (a.constructor === Array) {
        result = compareArray(a, b);
      } else {
        result = compareObjects(a, b);
      }
      break;
    default:
      result = a === b;
  }
  return result;
}

console.log('1 1 should be true', compare(1, 1));
console.log('1 str1 should be false', compare(1, '1'));
console.log('[1] [] should be false', compare(['1'], []));

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

let vehicleOne = {
  useEngine: true,
  user: ['Simon', 'Hendry'],
};

let vehicleTwo = {
  useEngine: true,
  user: ['Simon', 'Hendry'],
};

let vehicleThree = {
  useEngine: true,
  user: ['Simon', 'Hendry', 'Paul'],
};

console.log('person 1 & 2 should be false', compare(personOne, personTwo));
console.log('person 1 & 3 should be true', compare(personOne, personThree));
console.log('person 2 & 4 should be true', compare(personTwo, personFour));

console.log('should be false', compare(null, personTwo));
console.log('should be false', compare(personTwo, 1));

console.log(
  'vehicleOne : vehicleTwo should be true',
  compare(vehicleOne, vehicleTwo),
);
console.log(
  'vehicleOne : vehicleThree should be false',
  compare(vehicleOne, vehicleThree),
);

//console.log(compareArray(vehicleOne.user, vehicleTwo.user));
