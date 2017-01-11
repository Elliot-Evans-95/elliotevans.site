// React
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

// Redux
import store from 'store';

// Base
import {indexApp, defineApp} from 'base/base__index';

// Header
import header from 'components/header/index';
//import header from 'components/header/nav-bar';
//import icon from 'components/header/icon';

// Content
import content from 'components/content/content__index';

// Footer
import footer from 'components/footer/index';

// HTML
import 'index.html';

ReactDOM.render(
  document.getElementById('root')
);
