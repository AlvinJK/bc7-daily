// @flow
import http from 'http';
import Router from './Router';

import serveHtml from './serveHtml';
import serveFile from './serveFile';

let routerPromise = new Promise((resolve, reject) => {
  let router = new Router();
  router.addRoute('/', ({request, response}) => {
    serveHtml(response, 'index.html');
  });
  router.addRoute('/foo', ({request, response}) => {
    serveHtml(response, 'index.html');
  });
  router.addRoute('/files/:fileName', ({request, response}, fileName) => {
    serveFile(response, fileName);
  });

  resolve(router);
});

let serverPromise = new Promise((resolve, reject) => {
  let server = http.createServer();
  server.on('error', (error) => {
    console.log(error);
  });

  server.listen('9090', () => {
    console.log('Server Started On 9090');
    resolve(server);
  });
});

Promise.all([routerPromise, serverPromise]).then(([router, server]) => {
  server.on('request', (request, response) => {
    router.handleRequest(request.url, {request, response});
  });
  console.log('All done');
});
