// @flow
import {join} from 'path';
import fs from 'fs';

import serveErrorPage from './serveErrorPage';
let assetDirectory = join(__dirname, '../assets/');

export default function serveHtml(response: *, htmlFile: string) {
  let indexFile = join(assetDirectory, htmlFile);
  let readStream = fs.createReadStream(indexFile);

  readStream.on('error', (error) => {
    if (error.code === 'ENOENT') {
      serveErrorPage(response, 404, error);
    } else {
      serveErrorPage(response, 500, error);
    }
  });
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  readStream.pipe(response);
}
