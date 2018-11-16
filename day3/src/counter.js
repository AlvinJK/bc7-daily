export default function createCounter() {
  let count = 0;

  return {
    inc: () => {
      count++;
    },
    dec: () => {
      count--;
    },
    getCount: () => count,
  };
}
/*
let counter = createCounter();
console.log(counter.getCount());
counter.inc();
counter.inc();
console.log(counter.getCount());

counter.dec();
console.log(counter.getCount());
*/
