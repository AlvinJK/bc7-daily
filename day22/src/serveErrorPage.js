// @flow
export default function serverErrorPage(
  response: *,
  statusCode: number,
  error: *,
) {
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'text/html');
  response.write('<p>Some Error Happened</p>');
  response.end();
  console.log('ERROR: ', error);
}
