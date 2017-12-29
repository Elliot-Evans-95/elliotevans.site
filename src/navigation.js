import React, { Component } from 'react';

import { AppNavigation, NavItems, StyledLink } from './styles';

class Navigation extends Component {
  render() {
    return (
      <AppNavigation>
        <ul>
          <NavItems>
            <StyledLink to="/">Home</StyledLink>
          </NavItems>
          <NavItems>
            <StyledLink to="/work">Work</StyledLink>
          </NavItems>
          <NavItems>
            <StyledLink to="/contact">Contact</StyledLink>
          </NavItems>
          <NavItems>
            <StyledLink to="/blog">Blog</StyledLink>
          </NavItems>
        </ul>
      </AppNavigation>
    );
  }
}

export default Navigation;
