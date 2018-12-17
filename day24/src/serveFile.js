// @flow
import {join, extname} from 'path';
import fs from 'fs';

import serveErrorPage from './serveErrorPage';
let filesDirectory = join(__dirname, '../assets/files/');

const fileTypes = {
  jpg: 'image/jpeg',
  png: 'image/png',
};

export default function serveFile(response: *, file: string) {
  let ext = extname(file).slice(1);
  let contentType = fileTypes[ext];
  if (contentType == null) {
    serveErrorPage(response, 405, new Error('Extension not allowed'));
    return;
  }
  let fileToServe = join(filesDirectory, file);
  let readStream = fs.createReadStream(fileToServe);

  readStream.on('error', (error) => {
    if (error.code === 'ENOENT') {
      serveErrorPage(response, 404, error);
    } else {
      serveErrorPage(response, 500, error);
    }
  });
  response.statusCode = 200;
  response.setHeader('Content-Type', contentType);
  readStream.pipe(response);
}
