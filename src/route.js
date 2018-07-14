import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './containers/home/home';
import About from './containers/about/about';
import Work from './containers/work/work';
import Contact from './containers/contact/contact';
import Blog from './containers/blog/blog';
import Navigation from './navigation';
import EEFooter from './components/footer/ee-footer';
import store from './store/index';

import './index.css';

const Root = () => (
  <Provider store={store}>
    <Router>
      <div className="appGrid">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <EEFooter />
      </div>
    </Router>
  </Provider>
);

export default Root;
