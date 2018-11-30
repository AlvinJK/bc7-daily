// @flow
import React from 'react';

import type {Repo} from './types/Repo';
import Repository from './Repository';
type Props = {
  repositories: Array<Repo>,
};

export default function RepoList(props: Props) {
  let {repositories} = props;
  return (
    <ul>
      {repositories.map((repo) => {
        return <Repository key={repo.id} data={repo} />;
      })}
    </ul>
  );
}
