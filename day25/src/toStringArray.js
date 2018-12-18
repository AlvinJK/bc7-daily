// @flow

export default function toStringArray(input: mixed): Array<string> {
  let returnArray = [];
  if (!Array.isArray(input)) {
    return returnArray;
  }
  for (let item of input) {
    if (typeof item === 'string') {
      returnArray.push(item);
    } else {
      if (item != null) {
        if (
          typeof item === 'object' ||
          typeof item === 'boolean' ||
          typeof item === 'number'
        ) {
          returnArray.push(item.toString());
        }
      }
    }
  }
  return returnArray;
}
