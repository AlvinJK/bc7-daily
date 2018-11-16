// @flow
/* global __dirname */
/* eslint-disable no-console */

import fs from 'fs';
import {join} from 'path';

let path: string = join(__dirname, '../flow-typed');
let allResults: Map<string, number> = new Map();

fs.readdir(path, (error, fileList) => {
  if (error) {
    throw error;
  }
  let printResults = () => {
    for (let fileName of fileList) {
      console.log(fileName, allResults.get(fileName));
    }
    console.log('DONE');
  };

  for (let fileName of fileList) {
    fs.stat(join(path, fileName), (error, result) => {
      allResults.set(fileName, result.size);
      if (allResults.size === fileList.length) {
        printResults();
      }
    });
  }
});

for (let i = 0; i < 100000; i++) {
  console.log(i);
}
