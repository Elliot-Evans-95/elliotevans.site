import * as React from 'react';
import { memo, ReactElement } from 'react';
import { CardProps } from './card.type';
import { CardContainer } from '../../styles/common.style';

const Card = (text: CardProps): ReactElement => {
  return (
    <CardContainer>
      <p>{text.about}</p>
    </CardContainer>
  );
};

export default memo(Card);
