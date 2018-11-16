// @flow
type StoredData = {[string]: mixed};
type SpecialFunction = (string, mixed) => mixed;
class DataStore {
  data: StoredData = {};

  set(key: string, value: mixed) {
    this.data[key] = value;
  }

  get(key: string) {
    return this.data[key];
  }
  forEach(fn: SpecialFunction): StoredData {
    let keyArr = Object.keys(this.data);
    let resultArr = {};
    for (let key of keyArr) {
      resultArr[key] = fn(key, this.data[key]);
    }
    return resultArr;
  }
}

export default DataStore;
