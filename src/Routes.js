// @flow

import Home from './home/Home';
import store from './shared/store';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './about/About';
import Work from './work/Work';
import Contact from './contact/Contact';
import Footer from './shared/components/Footer';
import Navigation from './shared/components/Navigation';
import Post from './post/Post';
import Skills from './skills/Skills';

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="appGrid">
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route path="/post/:id" component={Post} />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

export default Routes;
