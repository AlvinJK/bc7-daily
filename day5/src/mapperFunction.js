// @flow
type StringLengthFunction = (string) => number;
type GenericFunction<T, U> = (T) => U;

function mapArrayToNumber(
  array: Array<string>,
  fn: StringLengthFunction,
): Array<number> {
  let results = [];
  for (let item of array) {
    results.push(fn(item));
  }
  return results;
}

function mapArray<T, U>(array: Array<T>, fn: GenericFunction<T, U>): Array<U> {
  let results = [];
  for (let item of array) {
    results.push(fn(item));
  }
  return results;
}

export {mapArrayToNumber, mapArray};
