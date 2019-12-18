import * as React from 'react';
import { HeaderWrapper } from '../../styles/styles';
import { memo } from 'react';

// TODO: Add types
const PageHeader = ({ heading, subHeading }) => (
  <HeaderWrapper>
    <h1>{heading}</h1>
    <h3>{subHeading}</h3>
  </HeaderWrapper>
);

export default memo(PageHeader);
