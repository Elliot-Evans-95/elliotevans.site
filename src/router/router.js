// interface route {
//   name: string;
//   component: any;
//   data: any;
// }

export class Router {
  #history = window.history;
  #routes = [];
  #wrapperName = 'app';
  #appWrapper;
  #activeRoute;

  constructor() {
    // this.appWrapper = document.getElementById('app');
    //
    // if (this.appWrapper === null || this.appWrapper === undefined) {
    //   throw new Error('an element with the id of "app" does not exist');
    // }
  }

  createAppWrapper() {
    document.createElement('div').setAttribute('id', this.#wrapperName);
    return document.createElement(this.#wrapperName);
  }

  getState() {
    return this.history.state;
  }

  navigate(route) {
    this.setActiveRoute(route);
    this.appendActiveRoute();
  }

  add(route) {
    this.#routes.push(route);
  }

  addAll(routes) {
    this.#routes.splice(0, this.#routes.length);
    this.#routes.push(routes);
  }

  setActiveRoute(route) {
    this.activeRoute = route;
  }

  appendActiveRoute() {
    //   this.history.pushState(
    //     this.activeRoute.data(),
    //     `/${this.activeRoute.name}`,
    //     window.location.origin + `/${this.activeRoute.name}`
    //   );
    //
    //   document.title = this.activeRoute.name;
    //   this.appWrapper.appendChild(this.activeRoute.component);
  }
}
