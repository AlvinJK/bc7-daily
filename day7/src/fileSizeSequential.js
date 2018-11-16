// @flow
/* global __dirname */
/* eslint-disable no-console */

import fs from 'fs';
import {join} from 'path';

let path: string = join(__dirname, '../flow-typed');

fs.readdir(path, (error, fileList) => {
  if (error) {
    throw error;
  }

  let i = 0;
  let doNext = () => {
    fs.stat(join(path, fileList[i]), (error, result) => {
      console.log(fileList[i], result.size);
      if (i === fileList.length - 1) {
        console.log('DONE');
      } else {
        i += 1;
        doNext();
      }
    });
  };
  doNext();
});
