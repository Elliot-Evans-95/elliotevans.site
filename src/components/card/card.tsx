import * as React from 'react';
import { FunctionComponent, VNode } from 'preact';
import { memo } from 'preact/compat';
import { CardProps } from './card.type';
import { CardContainer } from '../../styles/common.style';

const Card: FunctionComponent<CardProps> = (text): VNode => {
  return (
    <CardContainer>
      <p>{text.about}</p>
    </CardContainer>
  );
};

export default memo(Card);
