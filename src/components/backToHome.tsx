import * as React from 'react';
import { VNode } from 'preact';
import { memo } from 'preact/compat';
import { AppNavigation, NavItems, StyledLink } from '../styles/common.style';
import { Link } from 'gatsby';

const BackToHome = (): VNode => {
  return (
    <AppNavigation>
      <ul>
        <NavItems>
          <Link className={StyledLink} to="/">
            ⬅️ Back
          </Link>
        </NavItems>
      </ul>
    </AppNavigation>
  );
};

export default memo(BackToHome);
