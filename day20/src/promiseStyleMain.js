// @flow
import http from 'http';
import fs from 'fs';
import {join} from 'path';

let serverPromise = new Promise((resolve, reject) => {
  let server = http.createServer();

  server.on('error', (error) => {
    reject(error);
  });

  server.listen('8000', () => {
    console.log('Server ready');
    resolve(server);
  });
});

let filePromise = new Promise((resolve, reject) => {
  let filePath = join(__dirname, '../assets/captain-america.jpg');
  fs.readFile(filePath, (error, data) => {
    if (error) {
      reject(error);
    } else {
      resolve(data);
    }
  });
});

Promise.all([serverPromise, filePromise]).then(([server, fileData]) => {
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
});
