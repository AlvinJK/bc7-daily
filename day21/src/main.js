// @flow
import http from 'http';
import fs from 'fs';
import {join} from 'path';

import serveHomePage from './serveHomePage';
import serveErrorPage from './serveErrorPage';

let server = http.createServer();

server.on('request', (request, response) => {
  let url = request.url;
  let method = request.method;

  switch (url) {
    case '/':
      //serveHomePage(response);
      let indexFile = join(__dirname, '../assets/index.html');
      let readStream = fs.createReadStream(indexFile);
      readStream.on('error', (error) => {
        if (error.code === 'ENOENT') {
          serveErrorPage(response, 404, 'FILE NOT FOUND');
        } else {
          serveErrorPage(response, 500, 'SERVER ERROR');
        }
      });
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      readStream.pipe(response);
      break;
    case '/submit':
      if (method === 'POST') {
        // Handle upload
        let uploadPath = join(__dirname, '../assets/uploads/temp.jpg');
        let writeStream = fs.createWriteStream(uploadPath);
        console.log('request received');
        request.pipe(writeStream);
        request.on('end', () => {
          response.statusCode = 200;
          response.setHeader('Content-Type', 'application/json');
          let obj = {
            flag: 'success',
          };
          response.write(JSON.stringify(obj, null, 2));
          response.end();
        });
      } else {
        serveErrorPage(response, 405, 'Not Allowed');
      }
      break;
    default:
      break;
  }
});

server.on('error', (error) => {
  console.log('ERROR SERVER :', error);
});
server.listen('9000', () => {
  console.log('Day 21 Server Started, listening on port 9000');
});
