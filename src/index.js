import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';
import Blog from './Blog';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Navigation from './navigation';
import EEFooter from './footer/ee-footer';

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
