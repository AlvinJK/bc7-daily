// @flow
import serveErrorPage from './serveErrorPage';
type RouteHandler<T> = (context: T, pathData: ?Object) => void;
type Route<T> = {
  pattern: string,
  handler: RouteHandler<T>,
};

type RouteList<T> = Array<Route<T>>;

export default class Router<T> {
  _routes: RouteList<T> = [];

  addRoute(pattern: string, handler: RouteHandler<T>) {
    this._routes.push({pattern, handler});
  }

  handleRequest(path: string, context: T): void {
    for (let {pattern, handler} of this._routes) {
      if (pattern.includes(':')) {
        // parameterized
        let pathData = this.tryMatchPattern(pattern, path);
        if (pathData) {
          handler(context, pathData);
          return;
        }
      } else {
        if (path === pattern) {
          handler(context, null);
          return;
        }
      }
    }
    if (typeof context === 'object' && context != null) {
      let {response} = context;
      serveErrorPage(response, 404, new Error('PAGE NOT FOUND'));
    }
  }
  tryMatchPattern(pattern: string, path: string): ?Object {
    let patternParts = pattern.slice(1).split('/');
    let pathParts = path.slice(1).split('/');
    if (patternParts.length !== pathParts.length) {
      return null;
    }
    let pathData: Object = {};
    for (let i = 0; i < patternParts.length; i++) {
      let patternPart = patternParts[i];
      if (patternPart.startsWith(':')) {
        pathData[patternPart.slice(1)] = pathParts[i];
      } else {
        let isMatch = pathParts[i] === patternPart;
        if (!isMatch) {
          return null;
        }
      }
    }
    return pathData;
  }
}
