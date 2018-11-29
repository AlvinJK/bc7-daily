// @flow
import fetch from 'node-fetch';
type Action = {type: 'WAIT', ms: number} | {type: 'FETCH', url: string};

function* getUserRepos(userID: string) {
  console.log('getUserRepos Called');
  yield {type: 'WAIT', ms: 2000};
  let repos: Array<Object> = yield {
    type: 'FETCH',
    url: `https://api.github.com/users/${userID}/repos`,
  };
  yield {type: 'WAIT', ms: 3000};
  return repos.map((repo) => repo.name);
}

function run(gen: Generator<any, any, any>) {
  function doAction(param: Array<Object> | void, callback) {
    let {done, value} = gen.next(param);
    if (!done && value != null) {
      switch (value.type) {
        case 'WAIT':
          setTimeout(() => {
            console.log(`Waited for ${value.ms} ms`);
            doAction(undefined, callback);
          }, value.ms);
          break;
        case 'FETCH':
          fetch(value.url)
            .then((response) => response.json())
            .then((result) => {
              doAction(result, callback);
            });

          /*
          let userRepos = [
            {name: 'repo 1', desc: 'tester'},
            {name: 'repo 2', desc: 'tester 2'},
          ];
          doAction(userRepos, callback);
          */
          break;
      }
    }

    if (done) {
      callback(value);
    }
  }
  return new Promise((resolve, reject) => {
    doAction(undefined, resolve);
  });
}

let promise: Promise<mixed> = run(getUserRepos('sstur'));
promise.then((result) => {
  console.log(result);
});
