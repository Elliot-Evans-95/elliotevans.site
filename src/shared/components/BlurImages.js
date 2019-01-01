// @flow

import React from 'react';
import { BlurImageContainer } from '../styles/styles';

const BlurImages = ({ title, description }) => (
  <BlurImageContainer>
    <h5>{title}</h5>
    <p>{description}</p>
    <div /> <div /> <div />
  </BlurImageContainer>
);

export default BlurImages;
