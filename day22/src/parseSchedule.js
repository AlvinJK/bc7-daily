// @flow

export default function parseSchedule(defaultObject: any) {
  let newObject = {};
  Object.keys(defaultObject).forEach((key) => {
    let person = defaultObject[key];
    Object.keys(person).forEach((day: string) => {
      if (!newObject.hasOwnProperty(day)) {
        newObject[day] = [];
      }
      if (person[day]) {
        newObject[day].push(key);
      }
    });
  });
  return newObject;
}
