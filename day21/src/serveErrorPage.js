// @flow
export default function serveErrorPage(
  response: *,
  statusCode: number,
  error: *,
) {
  console.log('ERROR PAGE ERROR : ', error);
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'text/html');
  response.write('<p>ERROR</p>');
  response.end();
}
