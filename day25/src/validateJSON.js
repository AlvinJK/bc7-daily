// @flow
type ObjectOf<T> = {[key: string]: T};
type JSONData =
  | null
  | boolean
  | number
  | string
  | Array<JSONData>
  | ObjectOf<JSONData>;

export default function validateJSON(input: JSONData) {
  let jsonData: JSONData;
  if (typeof input === 'string') {
    try {
      jsonData = JSON.parse(input);
    } catch (error) {
      jsonData = null;
    }
  } else {
    jsonData = input;
  }

  if (
    typeof jsonData != 'object' ||
    jsonData == null ||
    Array.isArray(jsonData)
  ) {
    return false;
  }
  if (jsonData.hasOwnProperty('name') && jsonData.hasOwnProperty('age')) {
    if (typeof jsonData.name === 'string' && typeof jsonData.age === 'number') {
      return true;
    }
  }
  return false;
}
