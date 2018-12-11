// @flow
import {join} from 'path';
import fs from 'fs';

import serveErrorPage from './serveErrorPage';
let assetDirectory = join(__dirname, '../assets/');

export default function serveHtml(response: *, htmlFile: string) {
  let indexFile = join(assetDirectory, htmlFile);
  let readStream = fs.createReadStream(indexFile);
  readStream.on('error', (error) => {
    console.log(error);
    if (error.code === 'ENOENT') {
      serveErrorPage(response, 404, 'FILE NOT FOUND');
    } else {
      serveErrorPage(response, 500, 'SERVER ERROR');
    }
  });
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  readStream.pipe(response);
}
