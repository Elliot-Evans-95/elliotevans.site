import * as React from 'react';
import { CardContainer } from '../styles/styles';
import { memo } from 'react';

interface IAboutTextProps {
  about: string;
}

const Card = (text: IAboutTextProps) => {
  return (
    <CardContainer>
      <p>{text.about}</p>
    </CardContainer>
  );
};

export default memo(Card);
