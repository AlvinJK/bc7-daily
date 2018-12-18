// @flow
import validateJSON from '../validateJSON';
it('should return true if input is correctly formatted', () => {
  let data = '{"name": "alvin", "age": 28}';
  expect(validateJSON(data)).toBe(true);
});
it('should return false if input is incorrectly formatted', () => {
  let data = '{"names": "alvin", "age": 28}';
  expect(validateJSON(data)).toBe(false);
  data = 'abc';
  expect(validateJSON(data)).toBe(false);
  data = null;
  expect(validateJSON(data)).toBe(false);
});
it('should return false if type of input is incorrect', () => {
  let data = '{"name": 28, "age": 28}';
  expect(validateJSON(data)).toBe(false);
  data = '{"name": "alvin", "age": "unknown"}';
  expect(validateJSON(data)).toBe(false);
});
