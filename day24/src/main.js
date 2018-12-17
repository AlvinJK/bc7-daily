// @flow
import http from 'http';
import Router from './Router';

import serveHtml from './serveHtml';
import serveFile from './serveFile';

let routerPromise = new Promise((resolve, reject) => {
  let router = new Router();

  router.addRoute('/', (context) => {
    let {response} = context;
    serveHtml(response, 'index.html');
  });
  router.addRoute('/foo', (context) => {
    let {response} = context;
    serveHtml(response, 'index.html');
  });
  router.addRoute('/files/:fileName', (context, pathData) => {
    let {response} = context;
    if (pathData != null) {
      let {fileName} = pathData;
      serveFile(response, fileName);
    }
  });

  resolve(router);
});

let serverPromise = new Promise((resolve, reject) => {
  let server = http.createServer();

  server.on('error', (error) => {
    reject(error);
  });

  server.listen('9024', () => {
    console.log('Server has started, listening request on port 9024');
    console.log('==================================================');
    resolve(server);
  });
});

Promise.all([serverPromise, routerPromise]).then(([server, router]) => {
  // Do Something
  server.on('request', (request, response) => {
    router.handleRequest(request.url, {request, response});
  });
});
