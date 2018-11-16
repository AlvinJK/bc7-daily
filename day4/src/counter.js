/*
class Counter {
  count: number = 0;
  // Javascript has no private props
  // means, there's no need for getter setter, since all is public

  // Why Classes
  // -> Performance benefit

  constructor(initialCount: number) {
    // Purpose : the method that is called / ran when new Variable of the class is created
    // Arguments for new Counter (new keyword) is passed to the constructor
    // Optional, if we dont care about arguments, we dont need constructor

    this.count(initialCount);
  }
  inc() {
    this.count += 1;
  }
  dec() {
    this.count -= 1;
  }
  getCount() {
    return this.count;
  }
}
*/

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
let counter = createCounter();
console.log(counter.getCount());
counter.inc();
counter.inc();
console.log(counter.getCount());

counter.dec();
console.log(counter.getCount());
