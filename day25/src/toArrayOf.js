// @flow
export default function toArrayOf<T>(
  input: mixed,
  mapFunction: (mixed) => T,
): Array<T> {
  let returnArray = [];
  if (!Array.isArray(input)) {
    return returnArray;
  }
  for (let item of input) {
    let newItem = mapFunction(item);
    returnArray.push(newItem);
  }
  return returnArray;
}
