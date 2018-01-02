import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import Home from './pages/home/home';
import Work from './pages/work/work';
import Contact from './pages/contact/contact';
import Blog from './pages/blog/blog';
import Navigation from './navigation';
import EEFooter from './components/footer/ee-footer';

import './index.css';

ReactDOM.render(
  <Router>
    <div className="appGrid">
      <Navigation />

      <Route exact path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />

      <EEFooter />
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
