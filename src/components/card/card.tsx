import * as React from 'react';
import { ReactElement } from 'react';
import { memo } from 'preact/compat';
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
