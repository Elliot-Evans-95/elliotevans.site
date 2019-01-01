// @flow

import React from 'react';
import { AltCardContainer, AltCardImage } from '../styles/styles';

const AltCard = ({ text, image }) => {
  return (
    <AltCardContainer>
      <p>{text[0]}</p>
      <p>{text[1]}</p>
      <p>{text[2]}</p>
      <AltCardImage src={image} alt="about me image" />
    </AltCardContainer>
  );
};

export default AltCard;
