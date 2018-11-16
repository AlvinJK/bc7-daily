/*
 * Task: given an array of objects, pluck a specific property from each
 */

function getNames(array) {
  let studentNames = [];
  for (let student of array) studentNames.push(student.name);
  return studentNames;
}

let students = [
  {name: 'Student1', university: 'UMN'},
  {name: 'Student2', university: 'UPH'},
  {name: 'Student3', university: 'UBM'},
];

console.log(getNames(students));
