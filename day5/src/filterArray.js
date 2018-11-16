// @flow

function filterArray<T>(array: Array<T>, fn: (T) => T | void) {
  let results: Array<T> = [];
  for (let item of array) {
    let temp = fn(item);
    if (temp != null) {
      results.push(temp);
    }
  }
  return results;
}

export {filterArray};
