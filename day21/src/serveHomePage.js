// @flow
export default function serveHomePage(response: *) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  let htmlHead = '<head><title>Day 21</title></head>';
  let form = `<form action="/submit" method="POST" target="_blank" enctype="multipart/form-data">
  <input type="text" name="img_name">
  <input type="file" name="img_file">
  <button type="submit">Send</button>
  </form>`;
  let htmlBody = `<body>${form}</body>`;
  response.write(`<html>${htmlHead}${htmlBody}</html>`);
  response.end();
  return;
}
