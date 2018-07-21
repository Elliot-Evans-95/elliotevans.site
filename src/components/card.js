// @flow

import React from 'react';
import PropTypes from 'prop-types';

import { TextContainer } from '../assets/styles/styles';

type Props = {
  text: PropTypes
};

const Card = (props: Props) => {
  return (
    <TextContainer>
      <p>{props.text[3]}</p>
    </TextContainer>
  );
};

Card.propTypes = {
  text: PropTypes.array
};

export default Card;
