// @flow
export default function serveErrorPage(
  response: *,
  statusCode: number,
  error: *,
) {
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'text/html');
  response.write(`<p>Some Error Happened:  ${error.toString()} </p>`);
  response.end();
}
