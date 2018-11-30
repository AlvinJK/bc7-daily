// @flow
import React from 'react';

import type {Repo} from './types/Repo';
type Props = {
  data: Repo,
};
export default function Repository(props: Props) {
  let {data} = props;
  return (
    <li>
      <span>{data.name}</span>
      <span>{data.subCount}</span>
    </li>
  );
}
