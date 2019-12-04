import * as React from 'react';
import { AppNavigation, NavItems, StyledLink } from '../styles/styles';
import { memo } from 'react';

// @ts-ignore
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "selected" } : null
};

const Navigation = () => {
  return (
    <AppNavigation>
      <ul>
        <NavItems>
          <StyledLink to="/" getProps={isActive}>
            Home
          </StyledLink>
        </NavItems>
        <NavItems>
          <StyledLink to="/about" getProps={isActive}>
            About
          </StyledLink>
        </NavItems>
        <NavItems>
          <StyledLink to="/skills" getProps={isActive}>
            Skills
          </StyledLink>
        </NavItems>
        <NavItems>
          <StyledLink to="/work" getProps={isActive}>
            Work
          </StyledLink>
        </NavItems>
        <NavItems>
          <StyledLink to="/contact" getProps={isActive}>
            Contact
          </StyledLink>
        </NavItems>
      </ul>
    </AppNavigation>
  );
};

export default memo(Navigation);
