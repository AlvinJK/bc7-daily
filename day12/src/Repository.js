// @flow
import React from 'react';

import type {Repos} from './types/Repos';

type Props = {
  repo: Repos,
};
export default function Repository(props: Props) {
  let {repo} = props;
  return (
    <li>
      <a href={repo.url}>
        {repo.reposName} - {repo.numOfSub}
      </a>
    </li>
  );
}
