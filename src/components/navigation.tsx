import * as React from 'react';
import { memo } from 'react';
import { AppNavigation, NavItems, StyledLink } from '../styles/styles';

interface INavigationActive {
  isCurrent: boolean;
}

const isActive = ({ isCurrent }: INavigationActive) =>
  isCurrent ? { className: 'selected' } : null;

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
          <StyledLink to="/about/" getProps={isActive}>
            About
          </StyledLink>
        </NavItems>
        <NavItems>
          <StyledLink to="/projects/" getProps={isActive}>
            Projects
          </StyledLink>
        </NavItems>
        <NavItems>
          <StyledLink to="/contact/" getProps={isActive}>
            Contact
          </StyledLink>
        </NavItems>
      </ul>
    </AppNavigation>
  );
};

export default memo(Navigation);
