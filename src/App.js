import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Button from './button';

const Home = () =>
  <div>
    <h2>Home</h2>
    <Button message={'Something'} />
  </div>;

const Work = () =>
  <div>
    <h3>Work</h3>
  </div>;

const Contact = () =>
  <div>
    <h3>Contact</h3>
  </div>;

const Blog = () =>
  <div>
    <h3>Blog</h3>
  </div>;

const BasicExample = () =>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
    </div>
  </Router>;
export default BasicExample;
