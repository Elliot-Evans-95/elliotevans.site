import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/home/home';
import Work from './pages/work/work';
import Contact from './pages/contact/contact';
import Blog from './pages/blog/blog';
import Navigation from './navigation';
import EEFooter from './components/footer/ee-footer';

import './index.css';

type Props = {
  store: Object
};

const Root = (props: Props) => {
  return (
    <Provider store={props.store}>
      <Router>
        <div className="appGrid">
          <Navigation />

          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />

          <EEFooter />
        </div>
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object
};

export default Root;
