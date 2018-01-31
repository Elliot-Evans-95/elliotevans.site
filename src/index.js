import React from 'react';
import { render } from 'react-dom';
import Root from './route';
import registerServiceWorker from './registerServiceWorker';
import store from './Store/store';

let appStore = store.getState();

console.log(appStore);

render(<Root store={appStore} />, document.getElementById('root'));

registerServiceWorker();
