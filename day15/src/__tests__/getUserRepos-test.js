// @flow
import {genGetUserRepos} from '../getUserRepos';

it('should tested', () => {
  let gen = genGetUserRepos('sstur');
  expect(gen.next()).toEqual({
    done: false,
    value: {type: 'WAIT', ms: 200},
  });
  expect(gen.next()).toEqual({
    done: false,
    value: {type: 'FETCH', url: 'https://api.github.com/users/sstur/repos'},
  });
  let mockObj = [{name: 'repo 1', desc: ''}, {name: 'repo 2', desc: ''}];
  expect(gen.next(mockObj)).toEqual({
    done: false,
    value: {type: 'WAIT', ms: 300},
  });
  expect(gen.next()).toEqual({
    done: true,
    value: ['repo 1', 'repo 2'],
  });
});
