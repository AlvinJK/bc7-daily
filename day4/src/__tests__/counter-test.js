import createCounter from '../counter.js';

let counter = createCounter();
it('should start at zero', () => {
  expect(counter.getCount()).toEqual(0);
});

it('should increment', () => {
  counter.inc();
  counter.inc();
  expect(counter.getCount()).toEqual(2);
});

it('should decrement', () => {
  counter.dec();
  counter.dec();
  expect(counter.getCount()).toEqual(0);
});

