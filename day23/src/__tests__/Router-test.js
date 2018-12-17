// @flow
import Router from '../Router';
it('should route a path with no variables', () => {
  let router = new Router();
  let handler = jest.fn();
  let counter = 0;
  router.addRoute('/test', () => {
    counter += 1;
  });
  router.addRoute('/foo', handler);
  let context = {hello: 1};
  router.handleRequest('/test', context);
  expect(counter).toEqual(1);
});

/*
it('should not call any handler if route does not match', () => {
  let router = new Router();
  let counter = 0;
  router.addRoute('/', () => {
    counter += 1;
  });
  let context = {hello: 1};
  router.handleRequest('/foo', context);
  expect(counter).toEqual(0);
});

*/
