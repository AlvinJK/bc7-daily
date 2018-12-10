// @flow
import http from 'http';
import fs from 'fs';
import {join, extname} from 'path';

const supportedFileTypes = {
  jpg: 'image/jpeg',
  png: 'image/png',
  mp4: 'video/mp4',
};

let server = http.createServer();

server.on('error', (error) => {
  console.log('Something Happened!', error);
});

function serveErrorPage(response, statusCode, error) {
  console.log(error);
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'text/html');
  response.write('<p>ERROR</p>');
  response.end();
}
function serveAsset(response, filePath) {
  let extension = extname(filePath)
    .slice(1)
    .toLowerCase();
  let contentType = supportedFileTypes[extension];
  if (contentType == null) {
    serveErrorPage(response, 404, 'Type is not supported');
  } else {
    let readStream = fs.createReadStream(filePath);
    readStream.on('error', (error) => {
      if (error.code === 'ENOENT') {
        serveErrorPage(response, 404, 'Not Found');
      } else {
        serveErrorPage(response, 500, 'Server Error');
      }
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', contentType);
    readStream.pipe(response);
  }
}
function serveImage(response, filePath) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      serveErrorPage(response, 500, 'Internal Server Error');
    } else {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'image/jpeg');
      response.write(data);
      response.end();
    }
  });
}
function serveVideo(response, filePath) {
  let readStream = fs.createReadStream(filePath);
  readStream.on('error', (error) => {
    console.log(error);
    serveErrorPage(response, '500', error);
  });
  pipe(
    readStream,
    response,
  );
}
function pipe(readStream, writeStream) {
  let sent = false;
  readStream.on('data', (data) => {
    if (!sent) {
      writeStream.statusCode = 200;
      writeStream.setHeader('Content-Type', 'video/mp4');
    }
    let shouldContinue = writeStream.write(data);
    sent = true;
    if (!shouldContinue) {
      readStream.pause();
      writeStream.once('drain', () => {
        readStream.resume();
      });
    }
  });
  readStream.on('end', () => {
    writeStream.end();
  });
}

server.on('request', (request, response) => {
  let url = request.url;

  if (url.startsWith('/assets/')) {
    let fileName = request.url.slice(8);
    let assetsDir = join(__dirname, '../assets/');
    let filePath = join(assetsDir, fileName);
    if (!filePath.startsWith(assetsDir)) {
      serveErrorPage(response, 404, 'Not Found');
    } else {
      serveAsset(response, filePath);
    }

    return;
  }
  switch (url) {
    case '/':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.write('<p>Hello</p>');
      response.end();
      break;
    case '/image/captain':
      serveImage(response, join(__dirname, '../assets/captain-america.jpg'));
      break;
    case '/video/music':
      serveVideo(response, join(__dirname, '../assets/ning-shi.mp4'));
      break;
    case '/api/products':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      let products = [
        {id: 1, name: 'Panas 1', price: 30000},
        {id: 2, name: 'Panas 2', price: 45000},
        {id: 3, name: 'Panas Spesial', price: 28000},
      ];
      response.write(JSON.stringify(products, null, 3));
      response.end();
      break;
    default:
      serveErrorPage(response, '404', 'Not Found');
      break;
  }
});

server.listen(14045, () => {
  console.log('Server ready on 14045');
});
