import * as React from 'react';
import { memo, ReactElement } from 'react';
import { AppNavigation, NavItems, StyledLink } from '../styles/common.style';

const BackToHome = (): ReactElement => {
  return (
    <AppNavigation>
      <ul>
        <NavItems>
          <StyledLink to="/">⬅️ Back</StyledLink>
        </NavItems>
      </ul>
    </AppNavigation>
  );
};

export default memo(BackToHome);
