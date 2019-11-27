import './test.css'

interface Component {
  render(appShell: HTMLElement): void;
  setText(): void;
  setStyle(): void;
}

interface Constructable<T> {
  new(): T;
}


class ComponentsHelper {
  public components: Array<Component> = [];

  private static _instance: ComponentsHelper;

  static getInstance(): ComponentsHelper {
    if (!ComponentsHelper._instance) {
      ComponentsHelper._instance = new ComponentsHelper();
    }

    return ComponentsHelper._instance;
  }

  addComponent(component: Component): void {
    this.components = this.components.concat(component);
  }
}

class AppShellHelper {
  static readonly _rootName: string = 'root';

  static getAppShell(): HTMLElement {
    return document.getElementById(AppShellHelper._rootName);
  };
}

class Header implements Component {
  private readonly _element: HTMLElement;
  private readonly _text: string = "Header Text";

  constructor() {
    this._element = document.createElement('header');
    ComponentsHelper.getInstance().addComponent(this);

    this.setStyle();
    this.setText();
  }

  setStyle(): void {
    this._element.setAttribute('class', 'header');
  }

  setText(): void {
    this._element.textContent = this._text;
  }

  render(appShell: HTMLElement): void {
    appShell.appendChild(this._element);
  }
}

class Footer implements Component {
  private readonly _element: HTMLElement;
  private readonly _text: string = "Footer Text";

  constructor() {
    this._element = document.createElement('footer');
    ComponentsHelper.getInstance().addComponent(this);

    this.setStyle();
    this.setText();
  }

  setStyle(): void {
    this._element.setAttribute('class', 'footer');
  }

  setText(): void {
    this._element.textContent = this._text;
  }

  render(appShell: HTMLElement): void {
    appShell.appendChild(this._element);
  }

}


class AppShell {
  private readonly _appShellElement: HTMLElement;

  constructor(appShellElement: HTMLElement) {
    this._appShellElement = appShellElement;
  }

  addAppShellComponents(components: Array<Constructable<Component>>): void {
    for (const component of components) {
      new component();
    }
  }

  renderAppShellComponents(): void {
    for (const component of ComponentsHelper.getInstance().components) {
      component.render(this._appShellElement);
    }
  }

}

class App {
  element: HTMLElement;

  constructor() {
    document.createElement('div');
    this.element = AppShellHelper.getAppShell();
    this.createAppShell();
  }

  createAppShell(): void {
    const appShell = new AppShell(this.element);
    appShell.addAppShellComponents([Header, Footer]);
    appShell.renderAppShellComponents();
  }

}

export default new App();
