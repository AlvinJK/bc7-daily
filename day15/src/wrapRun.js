//@flow
import fetch from 'node-fetch';

export function run(gen: Generator<any, any, any>) {
  return new Promise<any>((resolve, reject) => {
    function doAction(param) {
      let {done, value} = gen.next(param);
      if (!done && value != null) {
        switch (value.type) {
          case 'WAIT':
            setTimeout(() => {
              console.log(`Waited for ${value.ms} ms`);
              doAction(undefined);
            }, value.ms);
            break;
          case 'FETCH':
            fetch(value.url)
              .then((response) => response.json())
              .then((result) => {
                doAction(result);
              });
            break;
        }
      }
      if (done) {
        resolve(value);
      }
    }
    doAction();
  });
}

export function wrap(genFunc) {
  return (...args) => run(genFunc(...args));
}
