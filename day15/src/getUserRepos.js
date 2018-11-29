import {wrap} from './wrapRun';
export function* genGetUserRepos(userID) {
  yield {type: 'WAIT', ms: 200};

  let repos = yield {
    type: 'FETCH',
    url: `https://api.github.com/users/${userID}/repos`,
  };
  yield {type: 'WAIT', ms: 300};
  return repos.map((repo) => repo.name);
}

export default wrap(genGetUserRepos);
