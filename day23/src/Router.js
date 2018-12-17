// @flow
import serveErrorPage from './serveErrorPage';

type RouteHandler = (context: Object, param: ?mixed) => void;
type RouteItem = {
  hasParam: boolean,
  startPath: string,
  handler: RouteHandler,
};
type Routes = Map<string, RouteItem>;

export default class Router {
  routes: Routes = new Map();
  addRoute = (pattern: string, handler: Function) => {
    if (this.routes.has(pattern)) {
      return new Error('This pattern is registered before');
    } else {
      let routeItem: RouteItem;
      if (pattern.includes(':')) {
        let startPath = this._parseParam(pattern);
        routeItem = {
          hasParam: false,
          startPath: startPath,
          handler: handler,
        };
      } else {
        routeItem = {
          hasParam: true,
          startPath: pattern,
          handler: handler,
        };
      }
      this.routes.set(pattern, routeItem);
    }
  };

  handleRequest = (path: string, context: Object) => {
    //handler(context, variable);
    let routes = this.routes;
    let {request, response} = context;
    let reqFound = false;
    for (let [pattern, routeItem] of routes) {
      let {hasParam, startPath, handler} = routeItem;
      if (hasParam) {
        // Have to process with starts with
        if (path.startsWith(startPath)) {
          let param = path.replace(startPath, '');
          handler({request, response}, param);
          reqFound = true;
          break;
        }
      } else {
        if (pattern === path) {
          handler(context);
          reqFound = true;
          break;
        }
      }
    }
    if (!reqFound) {
      serveErrorPage(response, 404, new Error('HANDLE REQ NOT FOUND'));
    }
  };

  _parseParam = (pattern: string) => {
    let parts = pattern.slice(1).split('/');
    let returnValue = '/';

    for (let str of parts) {
      if (str.startsWith(':')) {
        // Currenty will not support multiple parameter or parameter after non-parameter path outside path start string
        break;
      } else if (str != '') {
        // This is not a param, add this to start with
        returnValue += str + '/';
      }
    }
    return returnValue;
  };
}
