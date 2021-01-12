import * as React from 'react';
import { memo } from 'react';
import { AppNavigation, NavItems, StyledLink } from '../styles/styles';

const BackToHome = () => {
  return (
    <AppNavigation>
      <ul>
        <NavItems>
          <StyledLink to="/">
            ⬅️ Back
          </StyledLink>
        </NavItems>
      </ul>
    </AppNavigation>
  );
};

export default memo(BackToHome);
