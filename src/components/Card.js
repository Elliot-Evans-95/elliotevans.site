// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { TextContainer } from '../styles/styles';

// type Props = {
//   text: PropTypes
// };

const Card = props => {
  return (
    <TextContainer>
      <p>{props.text[3]}</p>
    </TextContainer>
  );
};

Card.propTypes = {
  text: PropTypes.array,
};

export default Card;
