// @flow

import React from 'react';
import { HeaderWrapper } from '../../styles/styles';

const PageHeader = ({ heading, subHeading }) => (
  <HeaderWrapper>
    <h1>{heading}</h1>
    <h3>{subHeading}</h3>
  </HeaderWrapper>
);

export default PageHeader;
