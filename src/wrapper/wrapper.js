// @flow

import React from 'react';
import Navigation from '../shared/components/Navigation';
import { Route } from 'react-router';
import Footer from '../shared/components/Footer';
import Routes from '../Routes';
import { Provider } from 'react-redux';
import store from '../shared/store';
import { BrowserRouter } from 'react-router-dom';

const Wrapper = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="appGrid">
        <Navigation />
        <Route path="/" component={Routes} className={'cool'} />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

export default Wrapper;
