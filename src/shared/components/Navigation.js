// @flow

import React from 'react';
import { AppNavigation, NavItems, StyledLink } from '../styles/styles';

const Navigation = () => {
  return (
    <AppNavigation>
      <ul>
        <NavItems>
          <StyledLink to="/" exact activeClassName="selected">
            Home
          </StyledLink>
        </NavItems>
        <NavItems>
          <StyledLink to="/about" activeClassName="selected">
            About
          </StyledLink>
        </NavItems>
        <NavItems>
          <StyledLink to="/work" activeClassName="selected">
            Work
          </StyledLink>
        </NavItems>
        <NavItems>
          <StyledLink to="/contact" activeClassName="selected">
            Contact
          </StyledLink>
        </NavItems>
      </ul>
    </AppNavigation>
  );
};

export default Navigation;
