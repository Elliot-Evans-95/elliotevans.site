// @flow

if (!('requestIdleCallback' in window)) {
  alert('This app does not support your browser');
}

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// import Wrapper from './wrapper/wrapper';

// ReactDOM.render(<Wrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import Root from './route';
// render(<Root />, document.getElementById('app'));

const appShellName = 'app';

// Adding rendering tasks here
const tasks = [];

// --- Renderer --------

async function Renderer() {
  await requestIdleCallback(ComputeWork);
}

async function ComputeWork(deadline) {
  while (deadline.timeRemaining() > 0 && tasks.length > 0) {
    tasks[0]();
    tasks.splice(0, 1);
  }
  if (tasks.length > 0) await requestIdleCallback(ComputeWork);
}

function App() {
  const self = this;
  this._app = document.createElement('div');
  this._app.setAttribute('id', appShellName);

  tasks.push(Render);

  function Render() {
    document.body.appendChild(self._app);
  }
}

function Footer() {
  const self = this;
  this._footer = document.createElement('footer');
  this._footer.setAttribute('id', 'footer');

  tasks.push(Render);

  function Render() {
    document.getElementById(appShellName).appendChild(self._footer);
  }
}

async function RenderShellComponents() {
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
