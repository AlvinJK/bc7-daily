// @flow

export default function* fibonacci(): Generator<any, any, any> {
  let prevVal = 0;
  let curVal = 1;
  while (true) {
    yield curVal;
    let nextVal = prevVal + curVal;
    prevVal = curVal;
    curVal = nextVal;
  }
}
