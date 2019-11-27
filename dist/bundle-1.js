class ComponentsHelper {
    constructor() {
        this.components = [];
    }
    static getInstance() {
        if (!ComponentsHelper._instance) {
            ComponentsHelper._instance = new ComponentsHelper();
        }
        return ComponentsHelper._instance;
    }
    addComponent(component) {
        this.components = this.components.concat(component);
    }
}
class AppShellHelper {
    static getAppShell() {
        return document.getElementById(AppShellHelper._rootName);
    }
    ;
}
AppShellHelper._rootName = 'root';
class Header {
    constructor() {
        this._text = "Header Text";
        this._element = document.createElement('header');
        ComponentsHelper.getInstance().addComponent(this);
        this.setStyle();
        this.setText();
    }
    setStyle() {
        this._element.setAttribute('class', 'header');
    }
    setText() {
        this._element.textContent = this._text;
    }
    render(appShell) {
        appShell.appendChild(this._element);
    }
}
class Footer {
    constructor() {
        this._text = "Footer Text";
        this._element = document.createElement('footer');
        ComponentsHelper.getInstance().addComponent(this);
        this.setStyle();
        this.setText();
    }
    setStyle() {
        this._element.setAttribute('class', 'footer');
    }
    setText() {
        this._element.textContent = this._text;
    }
    render(appShell) {
        appShell.appendChild(this._element);
    }
}
class AppShell {
    constructor(appShellElement) {
        this._appShellElement = appShellElement;
    }
    addAppShellComponents(components) {
        for (const component of components) {
            new component();
        }
    }
    renderAppShellComponents() {
        for (const component of ComponentsHelper.getInstance().components) {
            component.render(this._appShellElement);
        }
    }
}
class App {
    constructor() {
        document.createElement('div');
        this.element = AppShellHelper.getAppShell();
        this.createAppShell();
    }
    createAppShell() {
        const appShell = new AppShell(this.element);
        appShell.addAppShellComponents([Header, Footer]);
        appShell.renderAppShellComponents();
    }
}
var test = new App();

export default test;
//# sourceMappingURL=bundle-1.js.map
