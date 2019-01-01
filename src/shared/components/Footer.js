// @flow

import React, { memo } from 'react';
import { EEFooter } from '../styles/styles';

const Footer = () => {
  return (
    <EEFooter>
      <p>
        Made with{' '}
        <span role="img" aria-label="coffee">
          ☕
        </span>{' '}
        | 2018
      </p>
    </EEFooter>
  );
};

export default memo(Footer);
