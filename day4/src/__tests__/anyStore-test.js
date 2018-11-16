// @flow
import AnyStore from '../anyStore';
import type {Primitives, StoredData} from '../anyStore';

it('should return undefined if no data matched', () => {
  let d = new AnyStore();

  d.set('apples', 570);
  expect(Object.keys(d.data).length).toEqual(1);
  expect(d.get('apel')).toEqual(undefined);
});

it('should double all numbers and invert all boolean', () => {
  let d = new AnyStore();

  d.set('apples', 570);
  d.set(true, 9865);
  d.set(false, true);
  d.set(90, false);
  d.set('isMonopoly', false);

  let result: StoredData = d.forEach((key: Primitives, value: mixed) => {
    if (typeof value === 'boolean') {
      return !value;
    }
    if (typeof value === 'number') {
      return value * 2;
    }
    return value;
  });

  let expected: StoredData = {
    apples: 1140,
  };

  expected[true] = 19730;
  expected[false] = false;
  expected[90] = true;
  expected['isMonopoly'] = true;

  expect(result).toEqual(expected);
  /*
  expect(result).toEqual({
    apples: 1140,
    true: 19730,
    false: false,
    90: true,
    isMonopoly: true,
  });
  */
});
