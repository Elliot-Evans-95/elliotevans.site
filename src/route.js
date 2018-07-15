import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './containers/Pages/HomePage/home';
import About from './containers/Pages/AboutPage/about';
import Work from './containers/Pages/WorkPages/work';
import Contact from './containers/Pages/ContactPage/contact';
import Blog from './containers/Pages/BlogPage/blog';
import Navigation from './navigation';
import Footer from './components/footer';
import store from './store/index';

import './assets/styles/index.css';

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
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default Root;
