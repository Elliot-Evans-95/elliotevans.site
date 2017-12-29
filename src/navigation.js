import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AppNavigation } from './styles';

class Navigation extends Component {
  render() {
    return (
      <AppNavigation>
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
      </AppNavigation>
    );
  }
}

export default Navigation;
