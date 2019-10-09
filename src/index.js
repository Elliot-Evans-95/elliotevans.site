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

// Adding rendering tasks here
const tasks = [];

function App() {
  const self = this;
  this._app = document.createElement('div');
  this._app.setAttribute('id', 'app');

  tasks.push(Render);

  function Render() {
    document.body.appendChild(self._app);
  }
}

function Renderer() {
  requestIdleCallback(ComputeWork);
}

function ComputeWork(deadline) {
  while (deadline.timeRemaining() > 0 && tasks.length > 0) {
    tasks[0]();
    tasks.splice(0, 1);
  }

  if (tasks.length > 0) requestIdleCallback(ComputeWork);
}

// --------
const ShellComponents = [App];

for (let i = 0; ShellComponents.length > i; i++) {
  ShellComponents[i]();
}

Renderer();

// ---------
