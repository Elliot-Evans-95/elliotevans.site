import * as React from 'react';
import { memo, ReactElement } from 'react';
import { EEFooter } from '../styles/common.style';

const Footer = (): ReactElement => {
  return (
    <EEFooter>
      <p>
        <span role="img" aria-label="coding">
          🧑‍💻
        </span>{' '}
        2.0.0
      </p>
      <p>
        <span role="img" aria-label="time">
          🕑
        </span>{' '}
        2021
      </p>
    </EEFooter>
  );
};

export default memo(Footer);
