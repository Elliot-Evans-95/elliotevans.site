import * as React from 'react';
import { memo } from 'react';
import { EEFooter } from '../styles/styles';

const Footer = () => {
  return (
    <EEFooter>
      <p>
        Version: 1.0.0{' '}
        <span role="img" aria-label="party popper">
          🎉
        </span>{' '}
        | 2019
      </p>
    </EEFooter>
  );
};

export default memo(Footer);
