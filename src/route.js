import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Blog from './pages/blog/blog';
import Navigation from './navigation';
import EEFooter from './components/footer/ee-footer';
import ProjectList from './Containers/projectList';

import './index.css';

const Root = ({ store }) =>
  <Provider store={store}>
    <Router>
      <div className="appGrid">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/work" component={ProjectList} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <EEFooter />
      </div>
    </Router>
  </Provider>;

export default Root;
