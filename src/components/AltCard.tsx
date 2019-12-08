import * as React from 'react';
import { AltCardContainer } from '../styles/styles';
import { memo } from 'react';

// @ts-ignore
const AltCard = ({ text }) => {
  return (
    <AltCardContainer>
      <p>{text}</p>
    </AltCardContainer>
  );
};

export default memo(AltCard);
