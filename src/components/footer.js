// @flow

import React from 'react';

import { EEFooter } from '../assets/styles/styles';

const Footer = () => {
  return (
    <EEFooter>
      <p>
        Made by Elliot Evans with{' '}
        <span role="img" aria-label="coffee">
          ☕
        </span>{' '}
        | 2018
      </p>
    </EEFooter>
  );
};

export default Footer;
