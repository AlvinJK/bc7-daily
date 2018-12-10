// @flow

import http from 'http';
import fs from 'fs';
import {join} from 'path';

let filePath = join(__dirname, '../assets/captain-america.jpg');
fs.readFile(filePath, (error, fileData) => {
  let server = http.createServer();

  server.on('error', (error) => {
    console.log('error', error);
  });
  server.on('request', (request, response) => {
    let url = request.url;

    switch (url) {
      case '/':
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<p>Hello Welcome</p>');
        response.end();
        break;
      case '/image/captain':
        response.statusCode = 200;
        response.setHeader('Content-Type', 'image/jpeg');
        response.write(fileData);
        response.end();
        break;
      default:
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<p>NOT FOUND</p>');
        response.end();
        break;
    }
  });
  server.listen('8080', () => {
    console.log('Server is ready to listen at 8080');
  });
});
