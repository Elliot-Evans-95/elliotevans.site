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
        <div id="blob-1" />
        <div id="blob-2" />
        <div id="blob-3" />
        <div id="blob-4" />
        <div id="blob-5" />
        <div id="blob-6" />
        <div id="blob-7" />
        <div id="blob-8" />
        <Navigation />
        <Route path="/" component={Routes} className={'cool'} />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

export default Wrapper;
