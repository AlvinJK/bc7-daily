// @flow
import http from 'http';
import serveErrorPage from './serveErrorPage';
import serveHtml from './serveHtml';

import processNewProduct from './processNewProduct';

let server = http.createServer();

server.on('error', (error) => {
  console.log("There's an Error: ", error);
});

server.on('request', (request, response) => {
  let {url, method} = request;
  switch (url) {
    case '/':
      serveHtml(response, 'index.html');
      break;
    case '/submit-json':
      if (method === 'POST') {
        processNewProduct(request, response);
      } else {
        serveErrorPage(response, 405, 'NOT ALLOWED');
      }
      break;
    default:
      serveErrorPage(response, 404, 'ROUTE NOT FOUND');
      break;
  }
});

server.listen('8015', () => {
  console.log('Server started at 8015');
});
