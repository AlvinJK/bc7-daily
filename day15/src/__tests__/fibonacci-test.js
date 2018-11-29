// @flow
import fibonacci from '../fibonacci';

it('should return next fibo value on every next', () => {
  //
  let gen = fibonacci();
  let results = [];

  for (let i = 0; i < 5; i++) {
    results.push(gen.next().value);
  }
  expect(results).toEqual([1, 1, 2, 3, 5]);

  for (let i = 0; i < 5; i++) {
    results.push(gen.next().value);
  }
  expect(results).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});
