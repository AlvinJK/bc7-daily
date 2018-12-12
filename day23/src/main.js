// @flow

import http from 'http';
import fs from 'fs';
import {join} from 'path';
import Router from './Router';

import serveHtml from './serveHtml';
import serveFile from './serveFile';
let server = http.createServer();

server.on('error', (error) => {
  console.log('ERROR SERVER : ', error);
});
let router = new Router();
router.addRoute('/', ({request, response}) => {
  serveHtml(response, 'index.html');
});
router.addRoute('/files/:fileName', ({request, response}, fileName) => {
  serveFile(response, fileName);
});
server.on('request', (request, response) => {
  router.handleRequest(request.url, {request, response});
});

server.listen('9090', () => {
  console.log('Server Started On 9090');
});
