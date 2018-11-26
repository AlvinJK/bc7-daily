// @flow
import React from 'react';

import Repository from './Repository';

import type {Repos} from './types/Repos';

type Props = {
  repositoryList: Array<Repos>,
};
export default function RepoList(props: Props) {
  let {repositoryList} = props;
  console.log(repositoryList);
  return (
    <ul>
      {repositoryList.map((repo) => {
        return <Repository key={repo.id} repo={repo} />;
      })}
    </ul>
  );
}
