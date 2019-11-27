if (!('requestIdleCallback' in window)) {
  alert('This app does not support your browser');
}

const appShellName = 'app';

// Adding rendering tasks here
const tasks = [];

// --- Renderer --------

async function Renderer(): any {
  await requestIdleCallback(ComputeWork);
}

async function ComputeWork(deadline): any {
  while (deadline.timeRemaining() > 0 && tasks.length > 0) {
    tasks[0]();
    tasks.splice(0, 1);
  }
  if (tasks.length > 0) await requestIdleCallback(ComputeWork);
}

function App(): any {
  const self = this;
  this._app = document.createElement('div');
  this._app.setAttribute('id', appShellName);

  tasks.push(Render);

  function Render(): any {
    document.body.appendChild(self._app);
  }
}

function Footer(): any {
  const self = this;
  this._footer = document.createElement('footer');
  this._footer.setAttribute('id', 'footer');

  tasks.push(Render);

  function Render(): any {
    document.getElementById(appShellName).appendChild(self._footer);
  }
}

async function RenderShellComponents(): Promise<any> {
  // STATIC READ ONLY ARRAY
  const ShellComponents = [App, Footer];

  // For of doesn't work for me  :(
  // for await (let components of ShellComponents) {
  //   debugger;
  //
  //   new ShellComponents[components]();
  // }
  for (let i = 0; ShellComponents.length > i; i++) {
    ShellComponents[i]();
  }
}

RenderShellComponents().then(() => Renderer());
