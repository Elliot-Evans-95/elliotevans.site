import React from 'react';
import PropTypes from 'prop-types';

import { TextContainer } from '../../styles';

type Props = {
  text: Array
};

const EECard = (props: Props) => {
  return (
    <TextContainer>
      <p>
        {props.text[3]}
      </p>
    </TextContainer>
  );
};

EECard.propTypes = {
  text: PropTypes.array
};

export default EECard;
