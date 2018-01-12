import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { rootReducer } from './Reducers/reducer-app';
import Root from './route';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(rootReducer);

render(<Root store={store} />, document.getElementById('root'));

registerServiceWorker();
