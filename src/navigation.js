import React from 'react';

import { AppNavigation, NavItems, StyledLink } from './styles';

const Navigation = () => {
  return (
    <AppNavigation>
      <ul>
        <NavItems>
          <StyledLink to="/">Home</StyledLink>
        </NavItems>
        <NavItems>
          <StyledLink to="/about">About</StyledLink>
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
};

export default Navigation;
