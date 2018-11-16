// @flow
export type Primitives = string | boolean | number | null | void;
export type StoredData = {[Primitives]: mixed};
export type SpecialFunction = (Primitives, mixed) => mixed;
class AnyStore {
  data: StoredData = {};

  set(key: Primitives, value: mixed) {
    this.data[key] = value;
  }

  get(key: Primitives) {
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

export default AnyStore;
