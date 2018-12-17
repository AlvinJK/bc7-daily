// @flow
import Router from '../Router';

it('should route a path with no variables', () => {
  let router = new Router();
  let handler = jest.fn();

  router.addRoute('/', (context) => {
    handler(context);
  });
  router.addRoute('/foo', (context) => {
    handler(context);
  });

  let context = {hello: 1};
  router.handleRequest('/', context);
  expect(handler).toHaveBeenCalledWith(context);
  let context2 = {hello: 2};
  router.handleRequest('/foo', context2);
  expect(handler).toHaveBeenCalledWith(context2);
});

it('should match patterns', () => {
  let router = new Router();
  let result = router.tryMatchPattern('/foo/:param', '/foo');
  expect(result).toEqual(null);
  result = router.tryMatchPattern('/users/:id/:name', '/users/090/alvin');
  expect(result).toEqual({id: '090', name: 'alvin'});
});
