import React from 'react';
import { render } from 'react-dom';
import Root from './route';
import registerServiceWorker from './registerServiceWorker';

render(<Root />, document.getElementById('root'));

registerServiceWorker();
